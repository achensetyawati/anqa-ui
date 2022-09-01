module.exports = [
    // {
    //     route: 'upload-file-pbj',
    //     name: 'upload-file-pbj',
    //     moduleId: './modules/upload-file-pbj/index',
    //     nav: true,
    //     title: 'Upload Packing List Barang Jadi ke Toko',
    //     auth: true,
    //     settings: {
    //         group: "gudang pusat",
    //         permission: { "GDG1": 1 },
    //         iconClass: 'fa fa-bank'
    //     }
    // },
    // {
    //     route: 'upload-file-pba',
    //     name: 'upload-file-pba',
    //     moduleId: './modules/upload-file-pba/index',
    //     nav: true,
    //     title: 'Upload Packing List Embalase ke Toko',
    //     auth: true,
    //     settings: {
    //         group: "gudang pusat",
    //         permission: { "GDG1": 1 },
    //         iconClass: 'fa fa-bank'
    //     }
    // },
    {
        route: 'anq-tb-bbp',
        name: 'anq-tb-bbp',
        moduleId: './modules/anq-tb-bbp-cr/index',
        nav: true,
        title: 'Pemasukan Barang',
        auth: true,
        settings: {
            group: "gudang pusat",
            permission: { "C.01":1,"GP.01":1 },
            iconClass: 'fa fa-bank'
        }
    }, 
    {
      
    route: ['', 'Welcome'],
      name: 'welcome',
      moduleId: './welcome',
      nav: false,
      title: 'Home',
      auth: true,
      settings: { roles: ["*"] }
    },
    
    {
        route: 'packingList',
        name: 'packingList',
        moduleId: './modules/packing-list-cr/index',
        nav: true,
        title: 'PackingList',
        auth: true,
        settings: {
            group: "gudang pusat",
            permission: { "C.01":1,"GP.01":1 },
            iconClass: 'fa fa-bank'
        }
    },
    {
        route: 'packingList-tt',
        name: 'packingList-tt',
        moduleId: './modules/packing-list-tt/index',
        nav: true,
        title: 'PackingList Transfer Stock',
        auth: true,
        settings: {
            group: "gudang pusat",
            permission: { "C.01":1,"GP.01":1 },
            iconClass: 'fa fa-bank'
        }
    },
    {
        route: 'anq-kb-exp',
        name: 'anq-kb-exp',
        moduleId: './modules/anq-kb-exp-cr/index',
        nav: true,
        title: 'Distribusi Barang ke Ekspedisi',
        auth: true,
        settings: {
            group: "gudang pusat",
            permission: { "C.01":1,"GP.01":1 },
            iconClass: 'fa fa-bank'
        }
    },
    {
        route: 'anq-kb-rtu',
        name: 'anq-kb-rtu',
        moduleId: './modules/anq-kb-rtu-cr/index',
        nav: true,
        title: 'Retur Barang Ke Unit',
        auth: true,
        settings: {
            group: "gudang pusat",
            permission: { "C.01":1,"GP.01":1 },
            iconClass: 'fa fa-bank'
        }
    }
]
