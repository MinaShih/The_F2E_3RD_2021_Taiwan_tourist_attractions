import Travel from "@/views/Travel/index.vue";
import Product from "@/views/Travel/_id/index.vue";
// 1. Define route components.
// These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [{
        path: "/",
        component: Travel,
        name: "travel",
        childeren: []
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'travel-product-id'
    }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

export default routes;