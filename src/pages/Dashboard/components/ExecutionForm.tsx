import React from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { EMAIL_REGEXP } from '@configs/regexp';

export const ExecutionForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(null);
      }, 1000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`grid gap-4 md:grid-cols-3 grid-cols-1 ${
          errors.url || errors.name ? 'items-center' : 'items-end'
        }`}
      >
        <FormControl isInvalid={errors.url}>
          <FormLabel htmlFor="first-name">Place Server URL</FormLabel>
          <Input
            id="url"
            placeholder="http://hubdon-fttest05/FlowTalkWeb"
            {...register('url', {
              required: 'This is required',
              pattern: { value: EMAIL_REGEXP, message: 'an invalid url' },
            })}
          />

          <FormErrorMessage>
            {errors.url && errors.url.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="first-name">Test Case Name</FormLabel>
          <Input
            id="name"
            placeholder="e.g. MELU-12230"
            {...register('name', {
              required: 'This is required',
            })}
          />

          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <div>
          <Button
            mt={(errors.name || errors.url) && 1}
            width={150}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Execute
          </Button>
        </div>
      </div>
    </form>
  );
};
