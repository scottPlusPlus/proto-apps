import { ReactNode } from "react";


export default function TestC(){

    return <ComponentY ComponentX={ComponentX} />;

}
type ComponentXProps = {
    someHandle: () => void;
    children: ReactNode;
  };

function ComponentX({ someHandle, children }: ComponentXProps) {
    // Use someHandle as needed
    return <div>{children}</div>;
  }


  type ComponentYProps = {
    ComponentX: React.ComponentType<ComponentXProps>;
  };
  
  function ComponentY({ ComponentX }: ComponentYProps) {
    return (
      <div>
        <ComponentX someHandle={() => {}}>
          <p>example child</p>
        </ComponentX>
      </div>
    );
  }