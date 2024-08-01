import { Component, ErrorInfo } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "@/types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
   state: ErrorBoundaryState = {
      hasError: false,
   };

   static getDerivedStateFromError(): ErrorBoundaryState {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
   }

   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error("Uncaught error:", error, errorInfo);
   }

   render() {
      if (this.state.hasError) {
         return this.props.fallback || <h1>Sorry.. there was an error</h1>;
      }

      return this.props.children;
   }
}

export default ErrorBoundary;
