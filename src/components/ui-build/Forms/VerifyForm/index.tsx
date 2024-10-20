"use client";
import { useState } from "react";
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
import { FileUpload } from "@/components/ui/file-upload";
import { useValueContext } from "@/context/provider";
import { FormSchema } from "./schema";

function VerifyForm() {
  const [files, setFiles] = useState<File[]>([]);
  const { setIsMinted, setProvenance } = useValueContext();

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

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
    setProvenance((prev) => ({
      ...prev,
      artistName: data.artistName,
      uploadDate: data.dateOfCreation,
      mintedOn: new Date().toISOString(),
    }));

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    setIsMinted(true);
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
              {/* <FormControl>
                <Input
                  placeholder="Upload an image"
                  id="nft"
                  type="file"
                  accept=".jpg, .png, .gif"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl> */}
              {/* New component to replace the abive */}
              {/* <FileUpload onChange={handleFileUpload} /> */}
              <FileUpload
                onChange={(files) => {
                  field.onChange(files); // Pass files to form state
                }}
              />

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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
                  value={field.value.join(", ")} // display as a string
                  onChange={(e) =>
                    field.onChange(
                      e.target.value.split(",").map((url) => url.trim()),
                    )
                  } // transform back to array
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
