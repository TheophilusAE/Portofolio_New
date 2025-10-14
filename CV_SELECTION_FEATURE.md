# CV Selection Feature

## Overview
This feature allows users to choose between two different CV formats when downloading from your portfolio website:

1. **Creative CV** - A visually appealing CV with modern design elements, perfect for creative roles and portfolio presentations
2. **ATS CV** - A clean, structured CV optimized for Applicant Tracking Systems and traditional corporate applications

## How It Works

### User Experience
1. User clicks the "Download CV" button in the hero section
2. A modal popup appears with two CV options
3. Each option shows:
   - An icon (palette for creative, document for ATS)
   - Title and description
   - Download button
4. User selects their preferred CV type and downloads it
5. Modal closes automatically after download

### Files Structure

#### Component Files:
- `src/components/CVModal.jsx` - The modal component that handles CV selection
- `src/components/HeroSection.jsx` - Updated to use the CV modal instead of direct download

#### CV Files (in `/public` directory):
- `CV Theophilus Alexander Elvan (1).pdf` - Creative CV
- `Theophilus Alexander Elvan-resume.pdf` - ATS CV

## Features

### Modal Design:
- Animated entrance/exit with Framer Motion
- Responsive design (works on mobile and desktop)
- Backdrop blur effect
- Gradient accents that match your website theme
- Hover effects and micro-interactions

### Download Functionality:
- Different filenames for each CV type for user clarity
- Automatic modal close after download
- Clean file management with proper naming

### Accessibility:
- Keyboard navigation support
- Clear visual hierarchy
- Descriptive text for each CV type
- Close button and backdrop click to dismiss

## Usage

The CV selection modal is automatically integrated into your existing "Download CV" button in the hero section. No additional setup required - just make sure both CV files are in the `/public` directory with the correct names.

## Customization

### To add more CV types:
1. Add new CV file to `/public` directory
2. Update the `cvOptions` array in `CVModal.jsx`
3. Add corresponding file path to the `cvFiles` object

### To change styling:
- Modify the Tailwind classes in `CVModal.jsx`
- Update colors, spacing, or animations as needed
- The modal inherits your website's color scheme (blue/purple gradients)

## Technical Details

### Dependencies Used:
- Framer Motion (for animations)
- React Icons (for icons)
- Tailwind CSS (for styling)

### Browser Compatibility:
- Works on all modern browsers
- Mobile responsive
- Touch-friendly interface