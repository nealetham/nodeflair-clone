## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learning Outcomes

With my limited experience in Frontend development, I recreated a section of NodeFlair's job-listing [webpage](https://nodeflair.com/jobs?query=&page=1&sort_by=relevant) in under 48hours. While some may complete it under a day, or even a few hours, I am still satisfied with my accomplishment and the results.

Having little to no experience, I do welcome any feedback on how my project can be improved in terms of:

1. Functionality (e.g. Responsiveness, Aesthetic)
2. Cleanliness (e.g. Code Structure, Reusability, Extensibility)

## Efforts

Features Recreated:

- [x] Job-listing Cards (Logo, Organization, Technical Role, Job Title, Tech Stack, Location, Estimated Pay...)
- [x] Job-listing Card Hover
- [x] Job-listing Select Display Right-panel
- [x] "Sticky" Right-panel
- [x] Responsive Design (Desktop/Laptop vs Phone)

Features Lacking/Limitations:

- [ ] Selected Job-listing Border
- [ ] Tech Stack Cut-off

## Considerations/Trade-offs

1. Mapping

In order to accentuate the reusability of my `Card.js` component, I have decided to seed all the data into `data.js`, and import them in `index.js`, where each object is mapped to return a `Card`. However, with this method, I was unable to implement proper rendering of the selection of the job listings (i.e. the green borders). I would be able to render the selection, but unable to render the deselect (i.e. removing green borders).

The mapping of values also allowed me to highlight the extensibility aspect, as more data can be added to `data.js` for the `Cards` to be rendered.

## Tech Stack

NodeFlair-Clone was built with React, Next.js, Tailwind.css and hosted with Vercel.

## Credits

Credits to NodeFlair for allowing me to replicate their website as part of their technical assessment. All logos belong to their respective organizations.
