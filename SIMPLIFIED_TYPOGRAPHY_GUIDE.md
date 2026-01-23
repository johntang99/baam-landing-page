# 📝 Simplified Typography System

## 🎯 **5 Simple Text Sizes - That's It!**

### **Controlled in ONE File**: `/app/globals.css`

```css
/* Lines 115-120 */
--text-display: 3rem;        /* 48px - Hero titles */
--text-heading: 2.25rem;     /* 36px - Section titles */
--text-subheading: 1.25rem;  /* 20px - Card titles */
--text-body: 1rem;           /* 16px - Regular text (DEFAULT) */
--text-small: 0.875rem;      /* 14px - Tags, meta info */
```

---

## 📐 **Simple Size Reference**

| Name | Size | Pixels | When to Use | Example |
|------|------|--------|-------------|---------|
| **Display** | 3rem | 48px | Hero titles only | "Dr Huang Clinic" |
| **Heading** | 2.25rem | 36px | Section titles | "How Chinese Medicine Works" |
| **Subheading** | 1.25rem | 20px | Card titles, emphasis | "Acupuncture", "Chronic Pain" |
| **Body** | 1rem | 16px | All regular text | Descriptions, paragraphs |
| **Small** | 0.875rem | 14px | Tags, labels, meta | "8 min read", "Category" |

---

## 🎨 **How to Use**

### **Method 1: CSS Classes** (Easy!)

```tsx
{/* Hero title */}
<h1 className="text-display">Dr Huang Clinic</h1>

{/* Section title */}
<h2 className="text-heading">Our Services</h2>

{/* Card title */}
<h3 className="text-subheading">Acupuncture</h3>

{/* Regular text */}
<p className="text-body">Description goes here...</p>

{/* Small text */}
<span className="text-small">Category • 8 min read</span>
```

**Benefits:**
- ✅ Easy to remember (5 classes)
- ✅ Consistent across site
- ✅ Change in ONE place (globals.css)

### **Method 2: CSS Variables** (For custom)

```tsx
<h1 style={{ fontSize: 'var(--text-display)' }}>Title</h1>
```

---

## 📋 **Standardized Usage Rules**

### **EVERY Page Header:**
```tsx
<section>
  <span className="text-small font-semibold">LABEL</span>
  <h1 className="text-heading">Section Title</h1>
  <p className="text-subheading text-gray-600">Subtitle</p>
</section>
```

### **EVERY Card:**
```tsx
<div>
  <span className="text-small">Category</span>
  <h3 className="text-subheading">Card Title</h3>
  <p className="text-body">Description...</p>
</div>
```

### **EVERY CTA:**
```tsx
<section>
  <h2 className="text-heading text-white">Ready to Begin?</h2>
  <p className="text-body text-white/95">Description...</p>
  <button className="text-subheading font-bold">Button</button>
</section>
```

---

## 🎯 **Typography Decision Tree**

```
Is it a hero/page title?
  → YES: Use .text-display (48px)
  
Is it a section title?
  → YES: Use .text-heading (36px)
  
Is it a card title or emphasized text?
  → YES: Use .text-subheading (20px)
  
Is it regular content/description?
  → YES: Use .text-body (16px)
  
Is it metadata/tags/labels?
  → YES: Use .text-small (14px)
```

**That's it! Only 5 decisions.** ✅

---

## 📊 **Complete Specification**

### **Display** (Hero Titles)
- **Size**: 48px
- **Weight**: Bold (700)
- **Line Height**: Tight (1.25)
- **Usage**: 1 per page maximum
- **Example**: Page hero titles

### **Heading** (Section Titles)
- **Size**: 36px
- **Weight**: Bold (700)
- **Line Height**: Tight (1.25)
- **Usage**: 3-5 per page
- **Example**: "How Chinese Medicine Works", "Conditions We Treat"

### **Subheading** (Card Titles, Emphasis)
- **Size**: 20px
- **Weight**: Semibold (600)
- **Line Height**: Normal (1.5)
- **Usage**: Card titles, emphasized text
- **Example**: "Acupuncture", "Chronic Pain", "5 TCM Techniques"

### **Body** (Default Text)
- **Size**: 16px (DEFAULT)
- **Weight**: Normal (400)
- **Line Height**: Relaxed (1.625)
- **Usage**: All descriptions, paragraphs, content
- **Example**: All body content

### **Small** (Meta Information)
- **Size**: 14px
- **Weight**: Normal (400)
- **Line Height**: Normal (1.5)
- **Usage**: Tags, labels, dates, meta info
- **Example**: "8 min read", "Category: Acupuncture", "By Dr. Huang"

---

## 🔄 **Migration Guide**

### **Replace Complex Sizes:**

```tsx
// OLD (complex):
className="text-4xl md:text-5xl font-bold"

// NEW (simple):
className="text-heading"

// ---

// OLD:
className="text-lg font-semibold"

// NEW:
className="text-subheading"

// ---

// OLD:
className="text-sm leading-relaxed"

// NEW:
className="text-body"  /* Already includes relaxed leading */
```

---

## 💡 **Benefits of Simplified System**

### **For BAAM Studio:**
- ✅ **Easy to teach** - Only 5 sizes to remember
- ✅ **Consistent** - All sites look professional
- ✅ **Faster** - No decisions about sizes
- ✅ **Maintainable** - Change in one place
- ✅ **Scalable** - Works for any industry

### **For Clients:**
- ✅ Clean, professional look
- ✅ Proven hierarchy
- ✅ Accessible (WCAG compliant)
- ✅ Mobile-friendly

---

## 🎨 **Font Family Control**

**Controlled in**: `/app/globals.css` (Line 114)

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto...
```

**Applied globally** in `globals.css` (Line 157):
```css
body {
  font-family: var(--font-sans);
}
```

**To change font for entire site:**
1. Edit line 114 in `globals.css`
2. Change `--font-sans` value
3. Save
4. **Entire site font changes!** ✅

**Examples:**
```css
/* Google Fonts */
--font-sans: 'Inter', system-ui, sans-serif;
--font-sans: 'Poppins', system-ui, sans-serif;
--font-sans: 'Montserrat', system-ui, sans-serif;

/* Classic */
--font-sans: Georgia, serif;
--font-sans: 'Times New Roman', serif;
```

---

## 📦 **How to Implement Simplified System**

### **Option 1: Use CSS Classes** (Recommended)

I've added these to `globals.css`:

```css
.text-display     /* Hero titles - 48px bold */
.text-heading     /* Section titles - 36px bold */
.text-subheading  /* Card titles - 20px semibold */
.text-body        /* Regular text - 16px normal */
.text-small       /* Meta info - 14px normal */
```

**Usage:**
```tsx
<h1 className="text-display">Hero Title</h1>
<h2 className="text-heading">Section Title</h2>
<h3 className="text-subheading">Card Title</h3>
<p className="text-body">Description text</p>
<span className="text-small">Meta info</span>
```

### **Option 2: Add to BAAM Section Config**

**In your BAAM Studio UI:**
```
Text Type: [Dropdown]
  - Display (Hero only)
  - Heading (Section titles)
  - Subheading (Card titles)
  - Body (Default)
  - Small (Meta)
```

**Stored in DB:**
```json
{
  "title_size": "heading",
  "description_size": "body"
}
```

---

## 🎯 **Recommended Standard**

### **For ALL Sections:**

**Section Headers:**
- Label: `text-small` (14px)
- Title: `text-heading` (36px)
- Subtitle: `text-subheading` (20px)

**Content Cards:**
- Title: `text-subheading` (20px)
- Description: `text-body` (16px)
- Tags/Meta: `text-small` (14px)

**Stats:**
- Number: `text-display` (48px)
- Label: `text-small` (14px)

**CTAs:**
- Heading: `text-heading` (36px)
- Description: `text-body` (16px)
- Buttons: `text-subheading` (20px)

---

## ✅ **Simple Rule:**

```
Hero? → .text-display
Section title? → .text-heading
Card title? → .text-subheading
Everything else? → .text-body
Tiny stuff? → .text-small
```

**5 sizes. That's it.** ✅

---

## 🔧 **File Control Summary**

| What | File | Line | How to Change |
|------|------|------|---------------|
| **Font family** | `globals.css` | 114 | Edit `--font-sans` |
| **Text sizes** | `globals.css` | 117-121 | Edit 5 `--text-*` variables |
| **Font weights** | `globals.css` | 123-126 | Edit `--weight-*` variables |
| **Line heights** | `globals.css` | 128-130 | Edit `--leading-*` variables |
| **Utility classes** | `globals.css` | 225-253 | Pre-made `.text-*` classes |

**ONE FILE controls everything!** ✅

---

## 🚀 **Implementation**

### **Step 1: Change Sizes** (Optional)

Edit `globals.css` lines 117-121:

```css
/* Want bigger titles? */
--text-display: 4rem;      /* 64px instead of 48px */
--text-heading: 2.5rem;    /* 40px instead of 36px */

/* Want smaller everything? */
--text-display: 2.5rem;    /* 40px */
--text-heading: 2rem;      /* 32px */
```

### **Step 2: Use Consistent Classes**

Replace all complex Tailwind classes with simple ones:

```tsx
/* Replace: */
text-5xl md:text-6xl lg:text-7xl font-bold

/* With: */
text-display

/* Replace: */
text-4xl md:text-5xl font-bold

/* With: */
text-heading
```

---

## 🎊 **Summary**

**Font Control**: `/app/globals.css`

**Simple System**:
1. **Display** (48px) - Heroes
2. **Heading** (36px) - Sections
3. **Subheading** (20px) - Cards
4. **Body** (16px) - Content (DEFAULT)
5. **Small** (14px) - Meta

**How to use**: Use `.text-display`, `.text-heading`, etc. classes

**How to change**: Edit 5 variables in `globals.css` (lines 117-121)

**Result**: Consistent, professional typography across all pages! ✅

---

**Want me to update the site to use these simplified classes everywhere?** 🎯