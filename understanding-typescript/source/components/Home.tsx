import * as React from 'react';

interface HomeProps
{
    name: string;
    age: number;
}

export class Home extends React.Component<HomeProps, {}>
{
    render() {
        return (
            <div>
                Hello there, {this.props.name}, your age is {this.props.age}, right?
            </div>
        );
    }
}