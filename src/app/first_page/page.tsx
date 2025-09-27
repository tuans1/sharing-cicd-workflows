"use client";

import {
  Avatar,
  Button,
  Checkbox,
  createListCollection,
  Input,
  Portal,
  Select,
  Separator,
} from "@chakra-ui/react";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
});

export default function FirstPage() {
  return (
    <div className=" h-screen overflow-auto px-4!">
      <div className="flex">
        <p>Back</p>
        <h1 className="text-xl!" style={{ margin: " 0 auto" }}>
          Book a Session
        </h1>
      </div>
      <div className=" flex gap-4 p-4! mt-4! rounded-2xl bg-[#1F222A] sticky top-0 z-50">
        <Avatar.Root shape="full" size="2xl">
          <Avatar.Fallback name="Random User" />
          <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
        </Avatar.Root>
        <div>
          <p>Lena Rooser</p>
          <p>Functional Strength</p>
          <p>5 years experienced</p>
        </div>
      </div>
      <div className="pt-6!">
        <h2 className="text-[18px]! pb-4!">Available Package</h2>
        <div>
          <Select.Root collection={frameworks} size="lg">
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {frameworks.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </div>
      </div>
      <div className="pt-6!">
        <h2 className="text-[18px]! pb-4!">Session Type</h2>
        <div className="flex items-center p-4! bg-[#1F222A] rounded-md">
          <div className="w-10 h-10 bg-amber-400 mr-4!"></div>
          <div className="flex-1">
            <p>Online Session</p>
            <span className="text-xs!">Train with your trainer remotely</span>
          </div>
          <Checkbox.Root checked>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
        </div>
      </div>
      <div className="pt-4! ">
        <div className="bg-[#1F222A]">
          <div className="flex items-center p-4!   rounded-md">
            <div className="w-10 h-10 bg-amber-400 mr-4!"></div>
            <div className="flex-1">
              <p>Online Session</p>
              <span className="text-xs!">Train with your trainer remotely</span>
            </div>
          </div>
          <Separator />
          <Input className="px-4!" placeholder="Add a note..." />
        </div>
      </div>
      <div className="pt-6!">
        <Calendar
          mode="single"
          selected={new Date()}
          className="rounded-md border shadow-sm w-full"
          captionLayout="dropdown"
        />
      </div>
      <div className="pt-6! px-4! rounded-3xl!">
        <Button
          className="w-full"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              position: "top-center",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
