import React from "react";

import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";

import { MailIcon } from "../assets/icons";
import CTA from "../components/CTA";

function FormsPage() {
  return (
    <div>
      <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 pageTitle">
        Forms
      </h1>

      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Buttons
      </h2>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 inputWithButtonContainer">
        <Label className="inputWithButton">
          <span>Button left</span>
          <div className="relative">
            <input
              className="block w-full pl-20 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <button className="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
              Click
            </button>
          </div>
        </Label>

        <Label className="mt-4 inputWithButton">
          <span>Button right</span>
          <div className="relative text-gray-500 focus-within:text-purple-600">
            <input
              className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Click
            </button>
          </div>
        </Label>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Icons
      </h2>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 inputWithIconContainer">
        <Label className="inputWithIcon">
          <span>Icon left</span>
          {/* <!-- focus-within sets the color for the icon when input is focused --> */}
          <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
              <MailIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </Label>

        <Label className="mt-4 inputWithIcon">
          <span className="text-gray-700 dark:text-gray-400">Icon right</span>
          {/* <!-- focus-within sets the color for the icon when input is focused --> */}
          <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              className="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
              <MailIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </Label>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Validation
      </h2>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 validationForm">
        <Label className="input">
          <span>Invalid input</span>
          <Input className="mt-1" valid={false} placeholder="Jane Doe" />
          <HelperText valid={false}>Your password is too short.</HelperText>
        </Label>

        <Label className="mt-4 input">
          <span>Valid input</span>
          <Input className="mt-1" valid={true} placeholder="Jane Doe" />
          <HelperText valid={true}>Your password is strong.</HelperText>
        </Label>

        <Label className="mt-4 input">
          <span>Helper text</span>
          <Input className="mt-1" placeholder="Jane Doe" />
          <HelperText>
            Your password must be at least 6 characters long.
          </HelperText>
        </Label>
      </div>

     

      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Elements
      </h2>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 microInteractionsContainer">
        <Label className="nameInput">
          <span>Name</span>
          <Input className="mt-1" placeholder="Jane Doe" />
        </Label>

        <Label className="mt-4 nameInput">
          <span>Disabled</span>
          <Input disabled className="mt-1" placeholder="Jane Doe" />
        </Label>

        <div className="mt-4">
          {/* TODO: Check if this label is accessible, or fallback */}
          {/* <span className="text-sm text-gray-700 dark:text-gray-400">Account Type</span> */}
          <Label>Account Type</Label>
          <div className="mt-2 radioGroup">
            <Label radio>
              <Input type="radio" value="personal" name="accountType" />
              <span className="ml-2">Personal</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="business" name="accountType" />
              <span className="ml-2">Business</span>
            </Label>
            <Label disabled className="ml-6" radio>
              <Input
                disabled
                type="radio"
                value="disabled"
                name="accountType"
              />
              <span className="ml-2">Disabled</span>
            </Label>
          </div>
        </div>

        <Label className="mt-4 select">
          <span>Requested Limit</span>
          <Select className="mt-1">
            <option>$1,000</option>
            <option>$5,000</option>
            <option>$10,000</option>
            <option>$25,000</option>
          </Select>
        </Label>

        <Label className="mt-4 multiselect">
          <span>Multiselect</span>
          <Select className="mt-1" multiple>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </Select>
        </Label>

        <Label className="mt-4 textarea">
          <span>Message</span>
          <Textarea
            className="mt-1"
            rows="3"
            placeholder="Enter some long form content."
          />
        </Label>

        <Label className="mt-6 checkbox" check>
          <Input type="checkbox" />
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </Label>
      </div>

      <CTA />

    
    </div>
  );
}

export default FormsPage;
