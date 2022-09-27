import * as React from "@types/react";

// 스토리북에서 정의된 일부 컴포넌트 타입이 FunctionComponent로 되어있는데,
// React 18의 FunctionComponent type에는 children이 추가되어 있지 않다.
// 이를 해결하기 위해 타입을 확장한다.
// 스토리북 버전 7에서 수정되었음, 마이그레이션 이후 삭제 요망
declare module "react" {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}
