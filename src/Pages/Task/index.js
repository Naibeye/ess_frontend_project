import React, { useState } from 'react'
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
import { tasks } from '../data'
import TaskForm from './TaskForm'


function Task() {

    /**
     * Destructures the `isOpen`, `onClose`, and `onToggle` properties from the `useDisclosure` hook.
     * @returns An object containing the `isOpen`, `onClose`, and `onToggle` properties.
     */
    const { isOpen, onClose, onToggle } = useDisclosure()

    /**
     * Initializes a state variable with an empty array and a function to update the state.
     * @returns An array containing the state variable and the function to update the state.
     */
    const [data, setData] = useState(tasks)
    const [item, setItem] = useState({})
    const onGet = () => {

    }
    const columns = [
        {
            title: 'Title',
            field: 'title',
        },
        {
            title: 'Description',
            field: 'description',
        },
        {
            title: 'Posted by',
            field: 'createdBy',
            lookup: { 1: 'John Doe', 2: 'Jane Doe' },
        },
        {
          title: 'Status',
          field: 'status',
          lookup: { 1: 'In process', 2: 'Completed' },
      },
    ]
    return (
        <>
            <Datatable
                icon={<BsListCheck />}
                title={"List of Tasks"}
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
                        >Task Form</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <TaskForm
                                onClose={onClose}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Fade>
        </>
    )
}

export default Task