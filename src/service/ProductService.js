export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'instagram.com/mobilerast/',
                name: 'instagram',
                description: 'Well help you to finish your development project successfully. ',
               
               
            },
            {
                id: '1001',
                code: 'instagram.com/mobilerast/',
                name: 'instagram',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
              
            },
            {
                id: '1002',
                code: 'instagram.com/mobilerast/',
                name: 'instagram',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
              
            },
            {
                id: '1003',
                code: 'instagram.com/mobilerast/',
                name: 'instagram',
                description: 'Well help you to finish your development project successfully',
             
            },
            {
                id: '1004',
                code: 'instagram.com/mobilerast/',
                name: 'instagram',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
                
            },
            {
                id: '1005',
                code: 'instagram.com/mobilerast/',
                name: 'instagram',
                description: 'Well help you to finish your development project successfully',
              
            },
            {
                id: '1006',
                code: 'instagram.com/mobilerast/',
                name: 'instagram',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
              
            },
            {
                id: '1007',
                code: 'tr.linkedin.com/company/rastmobile',
                name: 'linkedin',
                description: 'Well help you to finish your development project successfully',
              
            },
            {
                id: '1008',
                code: 'tr.linkedin.com/company/rastmobiler',
                name: 'linkedin',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
               
            },
            {
                id: '1009',
                code: 'tr.linkedin.com/company/rastmobile',
                name: 'linkedin',
                description: 'Well help you to finish your development project successfully',
               
            },
            {
                id: '1010',
                code: 'tr.linkedin.com/company/rastmobile',
                name: 'linkedin',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
                
            },
            {
                id: '1011',
                code: 'tr.linkedin.com/company/rastmobile',
                name: 'linkedin',
                description: 'Well help you to finish your development project successfully',
              
            },
            {
                id: '1012',
                code: 'behance.net/rastmobile',
                name: 'behance',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
               
            },
            {
                id: '1013',
                code: 'behance.net/rastmobile',
                name: 'behance',
                description: 'Well help you to finish your development project successfully',
              
            },
            {
                id: '1014',
                code: 'behance.net/rastmobile',
                name: 'behance',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
               
            },
            {
                id: '1015',
                code: 'behance.net/rastmobile',
                name: 'behance',
                description: 'Well help you to finish your development project successfully',
               
            },
            {
                id: '1016',
                code: 'behance.net/rastmobile',
                name: 'behance',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
               
            },
            {
                id: '1017',
                code: 'behance.net/rastmobile',
                name: 'behance',
                description: 'Well help you to finish your development project successfully',
               
            },
            {
                id: '1018',
                code: 'behance.net/rastmobile',
                name: 'behance',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
               
            },
            {
                id: '1019',
                code: 'behance.net/rastmobile',
                name: 'behance',
                description: 'Well help you to finish your development project successfully',
                
            },
            {
                id: '1020',
                code: 'behance.net/rastmobile',
                name: 'behance',
                description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.',
               
            },
        ]
    },


    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

