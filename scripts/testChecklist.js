const fs = require('fs');
const path = require('path');

// Test checklist
const checklist = {
  'Images and Media': [
    'All images load correctly',
    'Images are optimized and responsive',
    'No broken image links',
    'Alt text is present for all images',
    'Images are served from Cloudinary'
  ],
  'Navigation': [
    'All navigation links work',
    'Mobile menu functions correctly',
    'Breadcrumbs are accurate',
    'Back button works as expected'
  ],
  'Forms': [
    'Contact form submits successfully',
    'Form validation works',
    'Error messages are clear',
    'Success messages appear',
    'Form data is properly saved'
  ],
  'Performance': [
    'Page load times are acceptable',
    'No console errors',
    'No 404 errors',
    'Images load progressively',
    'Lazy loading works'
  ],
  'Responsive Design': [
    'Site looks good on mobile',
    'Site looks good on tablet',
    'Site looks good on desktop',
    'No horizontal scrolling',
    'Text is readable at all sizes'
  ],
  'SEO': [
    'Meta tags are present',
    'Title tags are unique',
    'Description tags are unique',
    'H1 tags are used correctly',
    'Sitemap is valid'
  ],
  'Accessibility': [
    'Color contrast is sufficient',
    'Keyboard navigation works',
    'Screen reader compatibility',
    'ARIA labels are present',
    'Focus states are visible'
  ],
  'Features': [
    'Google Places integration works',
    'Service booking system functions',
    'Blog posts display correctly',
    'Search functionality works',
    'Filtering works on service pages'
  ]
};

// Function to generate a markdown report
function generateReport() {
  let report = '# Site Testing Checklist\n\n';
  
  for (const [category, items] of Object.entries(checklist)) {
    report += `## ${category}\n\n`;
    for (const item of items) {
      report += `- [ ] ${item}\n`;
    }
    report += '\n';
  }
  
  // Write the report to a file
  fs.writeFileSync('testing-checklist.md', report);
  console.log('Generated testing checklist in testing-checklist.md');
}

// Generate the report
generateReport(); 