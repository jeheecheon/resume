import { HTMLAttributes } from 'react';

function Greeting({ children }: HTMLAttributes<HTMLHeadingElement>) {
    return <h1>{children}</h1>;
}

export default Greeting;
