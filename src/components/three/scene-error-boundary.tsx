"use client";

import { Component, type ReactNode } from "react";

type Props = { fallback: ReactNode; children: ReactNode; onError?: () => void };
type State = { hasError: boolean };

/**
 * Catches runtime failures inside the 3D scene (e.g. a WebGL context loss or a
 * renderer incompatibility) so the rest of the page — and the static poster
 * fallback — stay usable instead of taking down the whole app.
 */
export class SceneErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Signature 3D experience failed to render:", error);
    this.props.onError?.();
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
