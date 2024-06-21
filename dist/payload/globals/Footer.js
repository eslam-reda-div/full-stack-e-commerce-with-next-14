"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var link_1 = __importDefault(require("../fields/link"));
exports.Footer = {
    slug: 'footer',
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'copyright',
            type: 'text',
            label: 'CopyRight',
            required: true,
        },
        {
            name: 'logo',
            type: 'upload',
            label: 'logo',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'footerNavItems',
            type: 'array',
            label: 'Footer Blocks Items',
            maxRows: 4,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'text',
                    label: 'Description',
                    required: true,
                },
                {
                    name: 'logo',
                    type: 'upload',
                    label: 'logo',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
        {
            name: 'navItems',
            type: 'array',
            maxRows: 6,
            fields: [
                (0, link_1.default)({
                    appearances: false,
                }),
            ],
        },
    ],
};
