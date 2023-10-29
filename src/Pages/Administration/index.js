import React, { useState } from 'react'
import UserForm from './UserForm'
import {
    useDisclosure,
    Box,
    Fade,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useColorModeValue
} from '@chakra-ui/react'
import Datatable from '../Composants/datatable'
import { BsListCheck } from 'react-icons/bs'
import { users } from '../data'

/**
 * Renders the Administration component.
 * @returns {JSX.Element} - The rendered Administration component.
 */
function Administration() {

    /**
     * Destructures the `isOpen`, `onClose`, and `onToggle` properties from the `useDisclosure` hook.
     * @returns An object containing the `isOpen`, `onClose`, and `onToggle` properties.
     */
    const { isOpen, onClose, onToggle } = useDisclosure()

    /**
     * Initializes a state variable with an empty array and a function to update the state.
     * @returns An array containing the state variable and the function to update the state.
     */
    const [data, setData] = useState(users)
    const [item, setItem] = useState({})
    const onGet = () => {

    }
    const columns = [
        {
            title: 'Name',
            field: 'name',
        },
        {
            title: 'Lastname',
            field: 'lastname',
        },
        {
            title: 'Email',
            field: 'email',
        },
        {
            title: 'Role',
            field: 'role',
        }
    ]
    return (
        <>
            <Datatable
                icon={<BsListCheck />}
                title={"List of users"}
                data={data}
                onGet={onGet}
                columns={columns}
                setData={setData}
                setItem={setItem}
                onToggle={onToggle}
            />
            <Fade in={isOpen}>
                <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
                    <ModalOverlay
                    // //  bg='Green.200'
                    //  backdropFilter='blur(10px) hue-rotate(90deg)'
                    />
                    <ModalContent>
                        <ModalHeader
                            bg={useColorModeValue('gray.800', 'gray.800')}
                            color={"whiteAlpha.800"}
                        >User Form</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <UserForm
                                onClose={onClose}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Fade>
        </>
    )
}

export default Administration