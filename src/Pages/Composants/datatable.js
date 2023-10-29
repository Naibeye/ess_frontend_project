import MaterialTable from 'material-table';
import React, { useEffect } from 'react'
import * as libUi from './lib'
import { Button, Flex, Spacer, Box, useColorModeValue } from '@chakra-ui/react'

import { MdAdd } from 'react-icons/md';

function Datatable({
  data,
  columns,
  setData,
  delRow,
  onSave,
  onDelete,
  onGet,
  title,
  icon,
  setItem,
  onToggle,
  canAdd,
  canEdit,
}) {
  const [rows, setRows] = React.useState([])
  const [dataColumns, setDataColumns] = React.useState([])
  const bg = useColorModeValue('brand.primary', 'brand.primary')
  useEffect(() => {

  }, [rows])

  useEffect(() => {
    let tab = []
    columns.map(item => {
      tab.push({
        ...item,
        cellStyle: {
          whiteSpace: 'nowrap'
        }
      })
    })
    setDataColumns(tab)
  }, [data, columns])


  return (
    <>
      <Box
        minW={{ base: "sm", md: "100%" }}
        p={{ base: 2, md: 10 }}

      >
        {title &&
          <Flex pb={5}>
            <Button
              bgGradient="linear(to-l,brand.secondary, brand.primary)"
              color="white"
              leftIcon={icon}
              w={{ base: "xs", md: "md" }}
              m={{ base: 1, md: 3 }}
            >
              {title}
            </Button>
            <Spacer />
            {canAdd && <Button
              onClick={() => {
                setItem({})
                onToggle()
              }}
              color={"white"}
              bgGradient="linear(to-r,brand.secondary, brand.primary)"
              w={{ base: "xs", md: "md" }}
             
              m={{ base: 1, md: 3 }}
              leftIcon={<MdAdd />}
            >
              {"Add new"}
            </Button>}
          </Flex>
        }


        <MaterialTable
          title=""
          columns={dataColumns}
          data={data}
          icons={libUi.tableIcons}
        //   localization={libUi.french}
          onRowClick={(event, rowData) => {
            event.preventDefault()
            console.log("first", rowData)
            if (canEdit){
                setItem(rowData)
                onToggle()
            }
            

          }}
          options={{
            headerStyle: {
              whiteSpace: 'nowrap',
              backgroundColor: '#1A202C',
              color: "white",
              fontFamily: 'poppins',
              fontSize: "14px",
            },
            pageSize:10,
            pageSizeOptions:[10,20,30,50,100]
          }}
         


        />
      </Box>

    </>
  )
}

export default Datatable


