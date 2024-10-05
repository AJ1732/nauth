"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
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

function VerifyForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nftFile: undefined,
      artworkTitle: "",
      artistName: "",
      dateOfCreation: "",
      artworkDescription: "",
      license: undefined,
      socialLinks: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-3xl space-y-6"
      >
        {/* Nft Upload */}
        <FormField
          control={form.control}
          name="nftFile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload NFT Image</FormLabel>
              <FormControl>
                <Input
                  placeholder="Upload an image"
                  id="nft"
                  type="file"
                  accept=".jpg, .png, .gif"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormDescription>
                After verification, your artwork will be minted as an NFT on the
                Solana blockchain, with full provenance and metadata recorded
                for transparency.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Artwork Title */}
        <FormField
          control={form.control}
          name="artworkTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Artwork Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title/name of art work" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Artist/Creator Name */}
        <FormField
          control={form.control}
          name="artistName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Artist/Creator Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter artist/creator name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Creation */}
        <FormField
          control={form.control}
          name="dateOfCreation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Creation</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Select the date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Artwork Description (Optional) */}
        <FormField
          control={form.control}
          name="artworkDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Artwork Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Add a short description or story (max 500 characters)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* License/Ownership Details */}
        <FormField
          control={form.control}
          name="license"
          render={({ field }) => (
            <FormItem>
              <FormLabel>License/Ownership Details</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a license" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full copyright">
                      Full copyright
                    </SelectItem>
                    <SelectItem value="Creative commons">
                      Creative commons
                    </SelectItem>
                    <SelectItem value="Public domain">Public domain</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Social Links (Optional) */}
        <FormField
          control={form.control}
          name="socialLinks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social Links (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter social media or website links"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can add links for provenance purposes (Optional).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="hover:bg-purple-500">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default VerifyForm;
