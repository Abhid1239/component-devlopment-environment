import ScrollSpy from './ScrollSpy';

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
            velit officia pariatur culpa. Duis laborum quis ipsum aliqua cillum labore Lorem ad ea.
            Cillum ex dolor officia consectetur officia magna duis Lorem pariatur mollit consequat
            officia dolor. Anim cupidatat duis magna ipsum incididunt minim consectetur enim irure.
            Culpa laborum sint aliqua Lorem do adipisicing sint velit do. Tempor duis cillum aliqua
            amet cupidatat culpa occaecat aliqua cupidatat nisi id velit. Adipisicing Lorem do aute
            enim quis enim adipisicing. Dolore enim sint amet ex magna voluptate aute anim dolor
            nisi dolor. Enim aute non elit ipsum duis sit consectetur. Et consequat duis sit qui
            fugiat laborum culpa non laborum est. Nulla aliquip qui occaecat excepteur anim. Nulla
            excepteur dolor sunt anim nostrud exercitation magna cillum culpa consectetur labore
            sunt irure. Excepteur laboris do occaecat consequat exercitation deserunt. Voluptate in
            quis labore laborum anim officia non fugiat nulla consequat ea voluptate elit. Nulla
            esse nostrud ea Lorem adipisicing. Nisi sunt minim sit pariatur do labore sunt amet
            minim duis duis anim veniam irure. Cillum tempor commodo est aliquip quis aute laborum
            sint nisi duis. Sunt sit minim eiusmod anim sit laboris sit do labore magna occaecat.
            Nostrud voluptate minim officia sunt excepteur. Officia sit deserunt aliquip esse
            incididunt veniam esse sint labore. Laboris ea fugiat ad culpa nulla. Quis non et
            officia officia magna labore id aute ullamco exercitation. Ea elit sit commodo duis
            nulla qui elit sit ex. Anim ullamco voluptate exercitation culpa aliqua deserunt. Dolore
            elit velit consectetur consequat nisi id sit enim irure sit ut nostrud ex. Voluptate
            magna nostrud et deserunt labore non. Non excepteur id ullamco ea. Ex voluptate ea
            deserunt aliqua commodo in occaecat adipisicing Lorem nisi eu exercitation ipsum ut.
            Excepteur reprehenderit amet est sit exercitation reprehenderit nisi enim dolore ex
            excepteur. Laboris aliqua dolor adipisicing irure est in. Pariatur laboris labore in
            anim cupidatat. Proident et voluptate non ipsum amet ipsum duis esse aliquip officia.
            Sit ut anim est sunt Lorem nulla mollit tempor sunt reprehenderit. Est ullamco
            consectetur magna consectetur. Exercitation ipsum reprehenderit incididunt eu culpa ad
            pariatur qui dolore et est. Voluptate velit dolore occaecat ullamco incididunt do sunt.
            Cillum nulla ea occaecat minim quis culpa in fugiat labore laborum duis aliquip in.
            Officia velit officia pariatur culpa. Duis laborum quis ipsum aliqua cillum labore Lorem
            ad ea. laborum. Ut minim ipsum laborum commodo deserunt ex veniam dolor magna
            exercitation. Reprehenderit in cillum eiusmod in sit irure tempor et anim aliqua eu
            Lorem. Qui aliquip aliquip esse in anim non magna.
        </p>
    </>
));
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        headContent: headContent,
        childContent: childContent,
    },
};
