import { Project } from './project';

export const DESCRIPTION: string = `
    Projects desription
`;

export const PROJECTS: Project[] = [
    {
        title: "Title",
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum suscipit ultrices lectus tempor volutpat. 
            Proin tempus ac augue eu sagittis. Vivamus varius enim ut fringilla porttitor. 
            Quisque luctus consequat augue, et ullamcorper tellus facilisis hendrerit. 
            Donec viverra tellus metus, sed porttitor enim dictum sed. 
            Phasellus eget odio aliquam, egestas magna sed, sagittis enim. 
            Praesent condimentum tellus id elit tempus tempus. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Aliquam eleifend interdum nisl ac dictum. Duis nec ante purus.`,
            `Maecenas in nisl gravida, placerat quam vitae, fermentum ipsum. 
            Proin velit urna, interdum non nisi eu, semper laoreet arcu. 
            Quisque congue odio ut tristique bibendum. Pellentesque eu tristique sem. 
            Sed fermentum tortor a massa pretium, nec aliquam dolor congue. 
            Etiam non bibendum lorem. Sed sagittis lectus sed pellentesque dapibus. 
            Sed bibendum volutpat velit, sed porta ex tincidunt dictum. 
            Nulla molestie neque vitae erat auctor, a vulputate augue mattis. 
            Fusce eleifend placerat faucibus. Nunc mollis a mauris at blandit. Donec risus libero, blandit sed varius quis, ornare vitae dolor. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Ut pretium, sapien vel mollis mollis, neque felis fringilla ante, non maximus erat sapien a diam. 
            Nullam vitae lacus purus. In non ornare justo, vel interdum est.`
        ],
        features: [
            "Feature one",
            "Feature two"
        ],
        images: []
    },
    {
        title: "Title two",
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum suscipit ultrices lectus tempor volutpat. 
            Proin tempus ac augue eu sagittis. Vivamus varius enim ut fringilla porttitor. 
            Quisque luctus consequat augue, et ullamcorper tellus facilisis hendrerit. 
            Donec viverra tellus metus, sed porttitor enim dictum sed. 
            Phasellus eget odio aliquam, egestas magna sed, sagittis enim. 
            Praesent condimentum tellus id elit tempus tempus. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Aliquam eleifend interdum nisl ac dictum. Duis nec ante purus.`,
            `Maecenas in nisl gravida, placerat quam vitae, fermentum ipsum. 
            Proin velit urna, interdum non nisi eu, semper laoreet arcu. 
            Quisque congue odio ut tristique bibendum. Pellentesque eu tristique sem. 
            Sed fermentum tortor a massa pretium, nec aliquam dolor congue. 
            Etiam non bibendum lorem. Sed sagittis lectus sed pellentesque dapibus. 
            Sed bibendum volutpat velit, sed porta ex tincidunt dictum. 
            Nulla molestie neque vitae erat auctor, a vulputate augue mattis. 
            Fusce eleifend placerat faucibus. Nunc mollis a mauris at blandit. Donec risus libero, blandit sed varius quis, ornare vitae dolor. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Ut pretium, sapien vel mollis mollis, neque felis fringilla ante, non maximus erat sapien a diam. 
            Nullam vitae lacus purus. In non ornare justo, vel interdum est.`
        ],
        features: [
            "Feature one",
            "Feature two"
        ],
        images: [
            {
                description: "Some image",
                url: "some-folder/some-image.png"
            },
            {
                description: "Some other image",
                url: "some-folder/some-other-image.png"
            }
        ]
    },
];