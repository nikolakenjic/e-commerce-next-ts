import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const salesType = defineType({
  name: 'sale',
  title: 'Sale',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Sale Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Sale Description',
      type: 'text',
    }),
    defineField({
      name: 'discountAmount',
      title: 'Discount Amount',
      type: 'number',
      description: 'Amount off in percentage or fixed value',
    }),
    defineField({
      name: 'couponCode',
      title: 'Coupon Code',
      type: 'string',
    }),
    defineField({
      name: 'validForm',
      title: 'Valid Form',
      type: 'datetime',
    }),
    defineField({
      name: 'validUntil',
      title: 'Valid Until',
      type: 'datetime',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to activate/deactivate the sale',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      discountAmount: 'discountAmount',
      couponCode: 'couponCode',
      isActive: 'isActive',
    },
    prepare(select) {
      const { title, discountAmount, couponCode, isActive } = select;
      const status = isActive ? 'Active' : 'Inactive';
      return {
        title,
        subtitle: `${discountAmount}% odd - Code: ${couponCode} - ${status}`,
      };
    },
  },
});
