import { useState, useEffect, useContext, useMemo } from 'react'
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    FormErrorMessage,
    PinInput,
    PinInputField,
    HStack
} from '@chakra-ui/react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from '@chakra-ui/react'

const TaskForm = ({
    onClose
}) => {
    const schema = yup.object().shape({
        title: yup.string().required("The title is required"),
        description: yup.string().required("The description is required"),
        // date: yup.string().required("The date is required"),

    });
    const onSubmit = async (data) => {


    }
    const { register, handleSubmit,  formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <>
            <form
            >

                <FormControl mt="2%" isInvalid={errors?.title}>
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                        Title*
                    </FormLabel>
                    <Input id="title" type="title" {...register("title")} name="title" placeholder="Enter the title" />
                    <FormErrorMessage>
                            {errors?.title && errors?.title?.message}
                        </FormErrorMessage>
                </FormControl>
                <FormControl mt="2%" isInvalid={errors?.description}>
                    <FormLabel htmlFor="description" fontWeight={'normal'}>
                        Description*
                    </FormLabel>
                    <Textarea id="description" type="description" {...register("description")} name="description" placeholder="Enter the description" />
                    <FormErrorMessage>
                            {errors?.title && errors?.title?.message}
                        </FormErrorMessage>
                </FormControl>
                {/* <Flex>

                    <FormControl mr="5%" isInvalid={errors?.date}>
                        <FormLabel htmlFor="date" fontWeight={'normal'}>
                            Date*
                        </FormLabel>
                        <Input id="date" name="date" type="datetime-local" placeholder="Enter the date"
                            {...register("date")}
                        />
                        <FormErrorMessage>
                            {errors?.date && errors?.date?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="lastname" fontWeight={'normal'}>
                            Time
                        </FormLabel>
                        <Input id="lastname" name="lastname" placeholder="Enter the lastname"
                            {...register("lastname")}
                        />
                    </FormControl>

                </Flex> */}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                color={"whiteAlpha.900"}
                                variant="solid"
                                w="7rem"
                                mr="5%"
                                onClick={onClose}
                                bgGradient="linear(to-r,brand.secondary, brand.primary)"
                            >
                                Go Back
                            </Button>
                        </Flex>
                        {<Button
                            w="7rem"
                            color={"whiteAlpha.900"}
                            bgGradient="linear(to-l,brand.secondary, brand.primary)"
                            variant="solid"
                            onClick={handleSubmit(onSubmit)}
                        >
                            Save
                        </Button>}
                    </Flex>
                </ButtonGroup>
            </form>

        </>
    )
}

export default TaskForm