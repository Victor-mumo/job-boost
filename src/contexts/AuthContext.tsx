
import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  showLoginModal: boolean;
  setShowLoginModal: (value: boolean) => void;
  showSignupModal: boolean;
  setShowSignupModal: (value: boolean) => void;
  pendingAction: (() => void) | null;
  setPendingAction: (action: (() => void) | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      showLoginModal,
      setShowLoginModal,
      showSignupModal,
      setShowSignupModal,
      pendingAction,
      setPendingAction
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
