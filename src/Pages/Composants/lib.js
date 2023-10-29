import React, { forwardRef } from 'react';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import {ImOffice } from 'react-icons/im';
import {BsTable,  BsXSquare, BsViewList, BsCheck} from 'react-icons/bs';
import {FiPieChart} from 'react-icons/fi';
import {FcViewDetails } from 'react-icons/fc';
import {MdDelete, MdDeleteForever} from 'react-icons/md';
import {BiEdit, BiAddToQueue,}  from 'react-icons/bi';
import Add from '@material-ui/icons/Add';

export const tableIcons = {
  Details: forwardRef((props, ref) => <FcViewDetails {...props} ref={ref} color='#c6a531'/>),
  Direction: forwardRef((props, ref) => <ImOffice {...props} ref={ref} color='#c6a531'/>),
  Chart: forwardRef((props, ref) => <FiPieChart {...props} ref={ref} color='#c6a531'/>),
  Recette: forwardRef((props, ref) => <BsTable {...props} ref={ref} color='#c6a531'/>),
  Add: forwardRef((props, ref) => <BiAddToQueue {...props} ref={ref} color='#c6a531'/>),
  Check: forwardRef((props, ref) => <BsCheck {...props} ref={ref} color='#c6a531'/>),
  Clear: forwardRef((props, ref) => <BsXSquare {...props} ref={ref} color='#c6a531' />),
  Delete: forwardRef((props, ref) => <MdDeleteForever {...props} ref={ref} color='#c6a531'/>),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} color='#c6a531'  />),
  Edit: forwardRef((props, ref) => <BiEdit {...props} ref={ref} color='#c6a531' />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} color='#c6a531'/>),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} color='#c6a531'/>),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} color='#c6a531'/>),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} color='#c6a531'/>),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} color='#c6a531'/>),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} color='#c6a531'/>),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} color='#c6a531'/>),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} color='#c6a531'/>),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} color='#c6a531'/>),
  ThirdStateCheck: forwardRef((props, ref) => <MdDelete {...props} ref={ref} color='#c6a531'/>),
  ViewColumn: forwardRef((props, ref) => <BsViewList {...props} ref={ref} color='#c6a531'/>)
};
export const french = {
  body: {
    emptyDataSourceMessage: "Pas d'enregistreent à afficher",
    addTooltip: 'Ajouter',
    deleteTooltip: 'Supprimer',
    editTooltip: 'Editer',
    filterRow: {
      filterTooltip: 'Filtrer'
    },
    editRow: {
      deleteText: 'Voulez-vous supprimer cette ligne?',
      cancelTooltip: 'Annuler',
      saveTooltip: 'Valider'
    }
  },
  grouping: {
    placeholder: "Tirer l'entête ...",
    groupedBy: 'Grouper par:'
  },
  header: {
    actions: 'Actions'
  },
  pagination: {
    labelDisplayedRows: '{from}-{to} de {count}',
    labelRowsSelect: 'lignes',
    labelRowsPerPage: 'lignes par page:',
    firstAriaLabel: 'Première page',
    firstTooltip: 'Première page',
    previousAriaLabel: 'Page précédente',
    previousTooltip: 'Page précédente',
    nextAriaLabel: 'Page suivante',
    nextTooltip: 'Page suivante',
    lastAriaLabel: 'Dernière page',
    lastTooltip: 'Dernière page'
  },
  toolbar: {
    addRemoveColumns: 'Ajouter ou supprimer des colonnes',
    nRowsSelected: '{0} ligne(s) sélectionée(s)',
    showColumnsTitle: 'Voir les colonnes',
    showColumnsAriaLabel: 'Voir les colonnes',
    exportTitle: 'Exporter',
    exportAriaLabel: 'Exporter',
    exportName: 'Exporter en CSV',
    searchTooltip: 'Chercher',
    searchPlaceholder: 'Chercher'
  }
}
export const formatterDate = (date) => new Intl.DateTimeFormat("fr-SN").format(new Date(date));
