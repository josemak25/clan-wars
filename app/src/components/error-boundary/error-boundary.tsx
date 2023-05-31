import React, { type ComponentType, type ReactNode } from "react";

import { FallbackComponentProps } from "../../../types";
import { FallbackScreen as FallbackComponent } from "../fallback";
import { Platform } from "react-native";

export type Props = {
  onError?: (error: Error, stackTrace: string) => void;
  FallbackComponent: ComponentType<FallbackComponentProps>;
  children: Exclude<NonNullable<ReactNode>, string | number | boolean>;
};

type State = { error: Error | null };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }

  static defaultProps: {
    FallbackComponent: ComponentType<FallbackComponentProps>;
  } = {
    FallbackComponent,
  };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    if (typeof this.props.onError === "function") {
      this.props.onError(error, info.componentStack);
    }
  }

  resetError: () => void = () => {
    this.setState({ error: null });
    if (Platform.OS === "web") {
      window.location.reload();
    }
  };

  render() {
    const { FallbackComponent } = this.props;

    return this.state.error ? (
      <FallbackComponent
        isModal={false}
        error={this.state.error}
        resetError={this.resetError}
      />
    ) : (
      this.props.children
    );
  }
}
