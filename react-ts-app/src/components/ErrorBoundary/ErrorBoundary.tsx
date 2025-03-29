import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // エラーが発生したときの処理
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('エラー:', error, errorInfo);
  }

  // エラー時の表示
  public render() {
    if (this.state.hasError) {
      return <h1>問題が発生しました。</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
