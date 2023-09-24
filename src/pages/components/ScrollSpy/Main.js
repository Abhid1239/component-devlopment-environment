import React from 'react';

import ScrollSpy from './ScrollSpy';
const headContent = ['abc', 'lmn', 'xyz', 'abc1', 'lmn4', 'xyz4'];

const childContent = headContent.map((head) => (
    <>
        <h1 key={head}>{head}</h1>
        <p>
            Nulla ea irure labore id non occaecat nostrud labore. Nostrud ullamco officia dolor ex
            magna ad magna ea adipisicing minim exercitation voluptate. Et reprehenderit est dolore
            minim veniam dolor anim quis id Lorem exercitation nisi cillum deserunt. Consectetur
            occaecat ipsum culpa id. Aute nulla Lorem ullamco in do adipisicing mollit Lorem veniam
            tempor pariatur ipsum commodo occaecat. Id dolore exercitation duis sint excepteur
            consectetur ex nulla occaecat mollit aliquip eu enim. Irure cupidatat id adipisicing
            aliqua Lorem esse ex. Voluptate velit dolore occaecat ullamco incididunt do sunt. Cillum
            nulla ea occaecat minim quis culpa in fugiat labore laborum duis aliquip in. Officia
            velcitation ipsum reprehenderit incididunt eu culpa ad pariatur qui dolore et est.
            Voluptate velit dolore occaecat ullamco incididunt do sunt. Cillum nulla ea occaecat
            minim quis culpa in fugiat labore laborum duis aliquip in. Officia velit officia
            pariatur culpa. Duis laborum quis ipsum aliqua cillum labore Lorem ad ea. laborum. Ut
            minim ipsum laborum commodo deserunt ex veniam dolor magna exercitation. Reprehenderit
            in cillum eiusmod in sit irure tempor et anim aliqua eu Lorem. Qui aliquip aliquip esse
            in anim non magna.
        </p>
    </>
));
function main() {
    return <ScrollSpy headContent={headContent} childContent={childContent} />;
}

export default main;
