"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
exports.Settings = {
    slug: 'settings',
    typescript: {
        interface: 'Settings',
    },
    graphQL: {
        name: 'Settings',
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'productsPage',
            type: 'relationship',
            relationTo: 'pages',
            label: 'Products page',
        },
        {
            name: 'promotionContent',
            type: 'textarea',
            label: 'Promotion Text Content',
            required: true,
        },
        {
            name: 'date',
            type: 'date',
            label: 'The date of the end of the offer',
            required: true,
        },
        {
            name: 'paner',
            type: 'upload',
            label: 'Paner',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'loginImage',
            type: 'upload',
            label: 'Login Image',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'SignUpImage',
            type: 'upload',
            label: 'Sign Up Image',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'recoverPasswordImage',
            type: 'upload',
            label: 'Recover Password Image',
            relationTo: 'media',
            required: true,
        },
    ],
};
