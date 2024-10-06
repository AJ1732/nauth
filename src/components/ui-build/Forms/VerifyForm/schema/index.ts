import { z } from "zod";

export const FormSchema = z.object({
  nftFile: z
    .custom<FileList>((value) => value instanceof FileList, {
      message: "You must upload a file.",
    })
    .refine((files) => files.length > 0, {
      message: "You must upload a file.",
    })
    .refine(
      (files) =>
        ["image/jpeg", "image/png", "image/gif"].includes(files[0]?.type),
      {
        message: "Only JPG, PNG, or GIF files are allowed.",
      },
    ),

  // Artwork Title
  artworkTitle: z.string().min(1, { message: "Artwork title is required." }),

  // Artist/Creator Name
  artistName: z
    .string()
    .min(1, { message: "Artist/creator name is required." }),

  // Date of Creation
  dateOfCreation: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format.",
  }),

  // Artwork Description (Optional)
  artworkDescription: z
    .string()
    .max(500, { message: "Description cannot exceed 500 characters." })
    .optional(),

  // License/Ownership Details
  license: z.enum(["Full copyright", "Creative commons", "Public domain"], {
    errorMap: () => ({ message: "You must select a valid license." }),
  }),

  // Social Links (Optional)
  socialLinks: z
    .array(z.string().url({ message: "Must be a valid URL." }))
    .optional(),
});
