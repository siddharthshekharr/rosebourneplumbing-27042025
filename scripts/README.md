# Image Migration Scripts

This directory contains scripts to help migrate images from Next.js Image to Cloudinary AppImage.

## Available Scripts

### 1. Find Images (`find-images.js`)

This script identifies all files in the codebase that use the Next.js Image component.

```bash
node scripts/find-images.js
```

Output:
- List of files that need migration
- Migration checklist
- Next steps

### 2. Migrate Single File (`migrate-images.js`)

This script migrates a single file from Next.js Image to AppImage.

```bash
node scripts/migrate-images.js src/app/page.js
```

### 3. Migrate All Files (`migrate-all-images.js`)

This script migrates all files identified by `find-images.js`.

```bash
node scripts/migrate-all-images.js
```

### 4. Update Cloudinary ID (`update-cloudinary-id.js`)

This script updates a Cloudinary ID in the mapping file and all direct references in the codebase.

```bash
node scripts/update-cloudinary-id.js [key] [new_id]
```

Example:
```bash
node scripts/update-cloudinary-id.js logo-white plumbing-website/new-logo-white-id
```

## Migration Process

1. **Identify Files**: Run `find-images.js` to identify all files that need migration.
2. **Upload Images**: Upload all images to Cloudinary using the `/admin/cloudinary-upload` page.
3. **Update Mapping**: Update the `src/lib/cloudinaryIdMapping.js` file with the actual Cloudinary IDs.
   - You can use `update-cloudinary-id.js` to update IDs one by one as you get them.
4. **Migrate Files**: Run `migrate-all-images.js` to migrate all files.
5. **Review Changes**: Review the migrated files to ensure the Cloudinary IDs are correct.
6. **Test**: Test the application to ensure all images are loading correctly.

## Manual Migration

For complex cases, you may need to manually migrate files:

1. Replace `import Image from 'next/image'` with `import AppImage from '@/components/ui/AppImage'`
2. Replace `<Image` with `<AppImage`
3. Replace `src="/images/example.jpg"` with `src="plumbing-website/example"`
4. Replace `src="https://example.com/image.jpg"` with `src="plumbing-website/example"`

## Cloudinary ID Format

All Cloudinary IDs should follow this format:

```
plumbing-website/[category]/[name]
```

Or for unique IDs:

```
plumbing-website/[unique_id]
```

Examples:
- `plumbing-website/bsabiqq5lhwomujtixoe` (logo)
- `plumbing-website/services/emergency/hero`
- `plumbing-website/about/team` 