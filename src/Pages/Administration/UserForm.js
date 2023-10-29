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

const UserForm = ({
    onClose
}) => {
    const schema = yup.object().shape({
        name: yup.string().required("The name is required"),
        email: yup.string().email('Not a proper email'),
        role: yup.string().required("The role is required"),

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

                <FormControl mt="2%" isInvalid={errors?.email}>
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                        Email address*
                    </FormLabel>
                    <Input id="email" type="email" {...register("email")} name="mail" placeholder="Enter the email" />
                    <FormErrorMessage>
                            {errors?.email && errors?.email?.message}
                        </FormErrorMessage>
                </FormControl>
                <Flex>

                    <FormControl mr="5%" isInvalid={errors?.name}>
                        <FormLabel htmlFor="name" fontWeight={'normal'}>
                            Name*
                        </FormLabel>
                        <Input id="name" name="name" placeholder="Enter the name"
                            {...register("name")}
                        />
                        <FormErrorMessage>
                            {errors?.name && errors?.name?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="lastname" fontWeight={'normal'}>
                            Lastname
                        </FormLabel>
                        <Input id="lastname" name="lastname" placeholder="Enter the lastname"
                            {...register("lastname")}
                        />
                    </FormControl>

                </Flex>
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

export default UserForm