import ScrollSpy from "./ScrollSpy";


// import ScrollSpyDocs from "./ScrollSpyDocs.mdx"
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Example/ScrollSpy',
    component: ScrollSpy,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // parameters: {
    //     docs: {
    //         page: ScrollSpyDocs,
    //     },
    // },
};

const headContent = [
    "abc",
    "lmn",
    "xyz", "abc1",
    "lmn4",
    "xyz4",
]


const childContent = headContent.map(head => (
    <>
        <h1 key={head}>{head}</h1>
        <p>
            Nulla ea irure labore id non occaecat nostrud labore. Nostrud ullamco officia dolor ex magna ad magna ea adipisicing minim exercitation voluptate. Et reprehenderit est dolore minim veniam dolor anim quis id Lorem exercitation nisi cillum deserunt. Consectetur occaecat ipsum culpa id. Aute nulla Lorem ullamco in do adipisicing mollit Lorem veniam tempor pariatur ipsum commodo occaecat. Id dolore exercitation duis sint excepteur consectetur ex nulla occaecat mollit aliquip eu enim. Irure cupidatat id adipisicing aliqua Lorem esse ex.

            ipsum laborum commodo deserunt ex veniam dolor magna exercitation. Reprehenderit in cillum eiusmod in sit irure tempor et anim aliqua eu Lorem. Qui aliquip aliquip esse in anim non magna.
        </p>
    </>
))
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        headContent: headContent,
        childContent: childContent
    },
};

