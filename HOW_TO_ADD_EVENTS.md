# How to Add a New Event

This guide will walk you through adding a new event to the website. You don't need to be a developer — just follow the steps carefully!

---

## Step 1 — Add Your Event Photos

1. Go to this folder on your computer:
   ```
   public/images/Events/
   ```

2. Create a **new folder** inside it. Name it after your event using underscores instead of spaces, and include the date at the end.

   Example: `My_New_Event_072025`

3. Put all your event **photos** inside that new folder.
   - Accepted formats: `.jpg`, `.jpeg`, `.png`
   - Avoid `.HEIC` files if possible — most browsers can't display them. Convert them to `.jpg` first using your phone's share/export settings or a free tool like [heic2jpg.com](https://heic2jpg.com).

---

## Step 2 — Open the Events Data File

Open this file in a code editor (like VS Code):

```
src/components/eventsData.js
```

---

## Step 3 — Copy an Existing Event Entry

Scroll to the bottom of the file. You'll see a list of events. **Copy one of the existing entries** (everything from `{` to `},`) and paste it at the end of the list, just before the closing `];`.

---

## Step 4 — Fill In Your Event Details

Update each field with your event's information:

```js
{
  slug: "my-new-event",          // A short unique ID — use lowercase with dashes, no spaces
  title: "My New Event",         // The title shown on the website
  date: "July 20, 2025",         // The event date (leave "" if unknown)
  tags: ["#MyNewEvent", "#Talidhay", "#Community"],  // Hashtags shown on the event page
  coverImage: "/images/Events/My_New_Event_072025/1.jpg",  // The main photo for this event

  gallery: [
    { src: "/images/Events/My_New_Event_072025/1.jpg", alt: "My New Event photo 1" },
    { src: "/images/Events/My_New_Event_072025/2.jpg", alt: "My New Event photo 2" },
    { src: "/images/Events/My_New_Event_072025/3.jpg", alt: "My New Event photo 3" },
    // Add more photos by copying the line above
  ],

  promotions: [],   // Leave empty for now — fill in later if needed
  report: [],       // Leave empty for now
  organizers: [],   // Leave empty for now

  description: `Write your event story here.

You can write multiple paragraphs. Just leave a blank line between them like this.

A third paragraph if you need one.`,
},
```

> **Tip:** If you don't have a description yet, just write `""` or leave the field out entirely — the website will automatically show a "Details coming soon" placeholder.

---

## Step 5 — Make Sure the Slug Is Unique

The `slug` is the ID used in the web address (e.g. `talidhay.com/eventsview/my-new-event`).

✅ Good slugs: `pitaka-talks-2`, `cheerful-draw-2026`, `donation-drive-june`  
❌ Bad slugs: `My New Event`, `event1`, same slug as an existing event

---

## Step 6 — Save and Check

Save the file. If the development server is running, open the Events page in your browser — your new event should appear in the grid automatically.

---

## Quick Checklist

- [ ] Photos added to `public/images/Events/YourFolderName/`
- [ ] New entry added at the bottom of the `events` array in `eventsData.js`
- [ ] `slug` is unique and uses lowercase-with-dashes
- [ ] `coverImage` path points to a real photo
- [ ] All `gallery` image paths are correct
- [ ] Description written (or left blank for placeholder)

---

## Example — Minimal Entry (fastest way to add)

If you just want to get the event on the site quickly and fill in the rest later:

```js
{
  slug: "my-new-event",
  title: "My New Event",
  date: "July 20, 2025",
  tags: ["#MyNewEvent", "#Talidhay"],
  coverImage: "/images/Events/My_New_Event_072025/1.jpg",
  gallery: [
    { src: "/images/Events/My_New_Event_072025/1.jpg", alt: "My New Event 1" },
    { src: "/images/Events/My_New_Event_072025/2.jpg", alt: "My New Event 2" },
  ],
  promotions: [],
  report: [],
  organizers: [],
  description: "",
},
```

That's it! The website will fill in a placeholder for any empty sections automatically.
