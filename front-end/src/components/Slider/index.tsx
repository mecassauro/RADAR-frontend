import React from 'react';
import Slider from '@material-ui/core/Slider';
import { Container } from './styles'

const marks_ant = [
    {
        value: 0,
        label: '01/03',
    },
    {
        value: 1,
        label: '08/03',
    },
    {
        value: 2,
        label: '15/03',
    },
    {
        value: 3,
        label: '22/03',
    },
    {
        value: 4,
        label: '29/03',
    },
    {
        value: 5,
        label: '05/04',
    },
    {
        value: 6,
        label: '12/04',
    },
    {
        value: 7,
        label: '19/04',
    },
    {
        value: 8,
        label: '26/04',
    },
    {
        value: 9,
        label: '03/05',
    },
    {
        value: 10,
        label: '10/05',
    },
    {
        value: 11,
        label: '17/05',
    },
    {
        value: 12,
        label: '24/05',
    },
    {
        value: 13,
        label: '31/05',
    },
    {
        value: 14,
        label: '07/06',
    },
    {
        value: 15,
        label: '14/06',
    },
    {
        value: 16,
        label: '21/06',
    },
    {
        value: 17,
        label: '28/06',
    },
    {
        value: 18,
        label: '04/07',
    },
    {
        value: 19,
        label: '11/07',
    },
    {
        value: 20,
        label: '15/07',
    },
];

const marks = [
    {
        value: 0,
        label: 'Março',
    },
    {
        value: 5,
        label: 'Abril',
    },
    {
        value: 9,
        label: 'Maio',
    },
    {
        value: 14,
        label: 'Junho',
    },
    {
        value: 18,
        label: 'Julho',
    },
];

function valuetext(value: number) {
    return marks_ant.findIndex((marks_ant) => marks_ant.value === value);
}

const LinhaTempo: React.FC = () =>{
    return(
        <Container>
            <Slider
                defaultValue={21}
                valueLabelFormat={valuetext}
                min={0}
                max={20}
                step={1}
                marks={marks}
                valueLabelDisplay="on"
            />
        </Container>
    )
}
export default LinhaTempo
