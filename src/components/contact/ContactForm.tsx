"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"

const FormSchema = z.object({
  name: z.string().min(1, { message: "Enter your full name" }),
  email: z.string().email("Invalid email address").min(1, { message: "Enter your email" }),
  message: z.string().min(1, { message: "Enter your message" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values); // Debugging: See what data is sent
  
    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message.");
      }
  
      const result = await response.json();
      toast(result.message);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast("Something went wrong. Please try again.");
    }
  }  

  return (
    <div className="w-full md:w-1/2 h-full">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem className="p-2">
                <FormLabel className="text-xl font-medium">Name</FormLabel>
                <FormControl>
                    <Input className="bg-gray-200" placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem className="p-2">
                <FormLabel className="text-xl font-medium">Email</FormLabel>
                <FormControl>
                    <Input className="bg-gray-200" placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem className="p-2">
                <FormLabel className="text-xl font-medium">Message</FormLabel>
                <FormControl>
                    <Textarea 
                    className="bg-gray-200 h-72 p-2 resize-none" 
                    placeholder="Your Message" 
                    {...field} 
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />


            <div className="p-2">
                <Button type="submit" className="bg-stone-800 text-white px-4 py-1 rounded-full">Submit</Button>
            </div>
        </form>
        <Toaster />
        </Form>
    </div>
  );
};

export default ContactForm;
