import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://sarah.lol', // Site domain
    title: 'Sarah Kuehnle - Artist, Designer, Creative Technologist', // Site title
    author: 'Sarah Kuehnle', // Author name
    description: 'Designer, Artist, Creative Technologist', // Site description
    language: 'en-US' // Default language
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '64rem', // Content area width
    centeredLayout: true, // Use centered layout (false for left-aligned)
    themeToggle: true, // Show theme toggle button (uses system theme by default)
    postListDottedDivider: false, // Show dotted divider in post list
    footer: true, // Show footer
    fadeAnimation: true // Enable fade animations
  },

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  date: {
    dateFormat: 'YYYY-MM-DD', // Date format: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    dateSeparator: '.', // Date separator: . - / (except for MONTH DAY YYYY and DAY MONTH YYYY)
    dateOnRight: true // Date position in post list (true for right, false for left)
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: true, // Show reading time in posts
    toc: true, // Show table of contents (when there is enough page width)
    imageViewer: true, // Enable image viewer
    copyCode: true, // Enable copy button in code blocks
    linkCard: true // Disable link card (requires server for GitHub Pages)
  }
}