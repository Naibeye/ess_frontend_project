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
    HStack,
    Spacer
} from '@chakra-ui/react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from '@chakra-ui/react'

const LoginForm = ({
    onClose
}) => {
    const schema = yup.object().shape({
        email: yup.string().required("The email is required"),
        password: yup.string().required("The password is required").min(8, "Minimum 8 characters"),
    });

    const onSubmit = async (data) => {


    }
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <>
            <form
            >

                <FormControl mt="2%" isInvalid={errors?.email}>
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                        Email*
                    </FormLabel>
                    <Input id="email" type="email" {...register("email")} name="email" placeholder="Enter the email" />
                    <FormErrorMessage>
                        {errors?.email && errors?.email?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl mt="2%" isInvalid={errors?.password}>
                    <FormLabel htmlFor="password" fontWeight={'normal'}>
                        Password*
                    </FormLabel>
                    <Input id="password" type="password" {...register("password")} name="password" placeholder="Enter the password" />
                    <FormErrorMessage>
                        {errors?.password && errors?.password?.message}
                    </FormErrorMessage>
                </FormControl>
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                    <Spacer />
                        {<Button
                            w="7rem"
                            color={"whiteAlpha.900"}
                            bgGradient="linear(to-l,brand.secondary, brand.primary)"
                            variant="solid"
                            onClick={handleSubmit(onSubmit)}
                        >
                           Login
                        </Button>}
                        <Box></Box>
                    </Flex>
                </ButtonGroup>
            </form>

        </>
    )
}

export default LoginForm