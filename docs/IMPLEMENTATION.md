# New Cohorts Implementation Plan

## Analysis Summary

Based on analysis of [Les Amis](http://lesamis.cc/) and our existing prototype, here are the key
insights:

### Key Insights from Les Amis:

- **Membership model** with application process and pricing tiers
- **Experience-focused** with curated activities and events
- **Community-driven** with testimonials and social proof
- **Clean, modern design** with excellent CTAs and Instagram integration
- **Strong value proposition** around meaningful connections

### Our Prototype Strengths:

- **Clear 6-week structure** with specific weekly activities
- **Strong problem/solution fit** for relocated people
- **Concrete pricing** (€120 for 6 weeks)
- **Testimonial** with specific details
- **FAQ section** addressing key concerns

## High-Level Implementation Plan

### 🎯 **Core Pages & Sections**

#### **1. Landing Page (`/`)**

**Sections:**

- **Hero Section**: "Your cohort in Amsterdam" with strong CTA
- **Problem/Solution**: Why cohorts work vs. random meetups
- **How It Works**: 3-step process (Apply → Show up → Stay connected)
- **6-Week Journey**: Visual timeline of activities
- **Testimonials**: Social proof with photos
- **FAQ**: Address key concerns
- **Final CTA**: "Ready to find your people?"

**Key Components:**

- `hero` section with gradient background
- `timeline` component for 6-week journey
- `testimonials` carousel
- `faq` accordion
- `cta-button` (primary action)

#### **2. About Page (`/about`)**

**Sections:**

- **Our Story**: Why we created New Cohorts
- **The Science**: Research behind cohort model
- **Team**: Founders and facilitators
- **Values**: What we stand for

**Key Components:**

- `prose` styling for content
- `team` cards
- `values` grid

### 🧩 **Recommended shadcn/ui Components**

#### **Essential Components:**

- `button` - Primary CTAs and secondary actions
- `card` - Testimonials, team members, activity cards
- `badge` - Status indicators, pricing tiers
- `separator` - Section dividers
- `accordion` - FAQ section
- `tabs` - Different pricing options or content sections
- `avatar` - Team photos, testimonial photos
- `input` - Email signup forms
- `textarea` - Application forms

#### **Advanced Components for Enhanced UX:**

- `marquee` - Testimonials scrolling
- `animated-testimonials` - Enhanced testimonial section
- `gradient-text` - Eye-catching headlines
- `background-gradient` - Hero section backgrounds
- `particles` - Subtle animations
- `shimmering-text` - Loading states
- `counter` - Statistics (number of cohorts, participants)
- `calendar` - Upcoming cohort dates
- `rating` - Participant feedback

#### **Layout Components:**

- `navbar-*` - Navigation (multiple options available)
- `container` - Content width management
- `grid-pattern` - Background patterns
- `dot-pattern` - Subtle backgrounds

### 🎨 **Design System Integration**

**Color Palette** (from existing design system):

- **Matcha**: `#6B8E6B` (primary brand)
- **Sage**: `#8FA68E` (secondary)
- **Cream**: `#F5F1ED` (text on dark)
- **Charcoal**: `#3A3A3A` (text on light)

**Typography**: Inter font family **Spacing**: 4px base unit system

### 📱 **Key Features to Implement**

1. **Strong CTA Strategy**:

   - Primary: "Join the Next Cohort" button → Links to
     [Tally.so signup form](https://sink.newcohorts.com/signup)
   - Secondary: Instagram link, About page
   - External signup flow with clear value proposition

2. **Instagram Integration**:

   - Dedicated Instagram button/link
   - Social proof through Instagram feed integration
   - Community photos and stories

3. **Clear Value Proposition**:
   - "The same people, every week" messaging
   - Specific 6-week structure explanation
   - Concrete pricing and commitment level

### 🚀 **Implementation Priority**

#### **Phase 1** (Core Landing Page):

1. Hero section with CTA
2. Problem/solution narrative
3. How it works (3 steps)
4. Basic testimonial
5. Email signup form

#### **Phase 2** (Enhanced Experience):

1. 6-week journey timeline
2. FAQ accordion
3. Instagram integration
4. Enhanced testimonials

#### **Phase 3** (Polish & Advanced Features):

1. About page
2. Advanced animations
3. Analytics integration
4. A/B testing setup

## Technical Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Components**: shadcn/ui component library
- **Deployment**: Vercel (recommended for Next.js)
- **Analytics**: Vercel Analytics or Google Analytics
- **Forms**: External Tally.so integration ([signup form](https://sink.newcohorts.com/signup))

## Content Strategy

### Hero Section Copy:

```
Your cohort in Amsterdam

A 6-week journey with the same group of people.
Build lasting friendships through consistent connection,
not random meetups.
```

### Value Proposition:

```
The same people, every week

Unlike one-off meetups or random friend-matching apps,
cohorts keep you with the same group for 6 consecutive weeks.
This creates the familiarity and trust needed for real
friendships to form.
```

### Call-to-Action:

```
Ready to find your people?

Next cohort starts Monday, November 18th.
Limited to 16 people. Apply by November 4th.

✨ €120 for 6 weeks • 12 events • Limited spots available
```

## Success Metrics

- **Conversion Rate**: Target 15%+ email signup rate
- **Engagement**: Time on page, scroll depth
- **Social Proof**: Instagram followers, shares
- **Application Quality**: Completion rate, quality of responses

## Next Steps

1. ✅ Set up Next.js with shadcn/ui
2. 🔄 Install essential shadcn components
3. 📝 Create hero section with CTA → Tally.so signup
4. 📝 Implement problem/solution narrative
5. 📝 Add testimonials section
6. 📝 Create FAQ accordion
7. ✅ External signup form (Tally.so integration)
8. 📝 Add Instagram integration
9. 📝 Implement 6-week journey timeline
10. 📝 Create About page
11. 📝 Add advanced animations
12. 📝 Set up analytics
13. 📝 Deploy to production

---

_Last updated: January 2025_ _Status: Phase 1 - Core Landing Page_
