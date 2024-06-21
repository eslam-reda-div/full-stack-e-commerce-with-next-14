"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Categories = {
    slug: 'categories',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true,
        },
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            label: 'Media',
            required: true,
        },
    ],
};
exports.default = Categories;
