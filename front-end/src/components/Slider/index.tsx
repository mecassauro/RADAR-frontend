import React from 'react';
import Slider from '@material-ui/core/Slider';
import { Container } from './styles'

const marks_ant = [
    {
        value: 0,
        label: '01',
    },
    {
        value: 1,
        label: '08',
    },
    {
        value: 2,
        label: '15',
    },
    {
        value: 3,
        label: '22',
    },
    {
        value: 4,
        label: '29',
    },
    {
        value: 5,
        label: '05',
    },
    {
        value: 6,
        label: '12',
    },
    {
        value: 7,
        label: '19',
    },
    {
        value: 8,
        label: '26',
    },
    {
        value: 9,
        label: '03',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 11,
        label: '17',
    },
    {
        value: 12,
        label: '24',
    },
    {
        value: 13,
        label: '31',
    },
    {
        value: 14,
        label: '07',
    },
    {
        value: 15,
        label: '14',
    },
    {
        value: 16,
        label: '21',
    },
    {
        value: 17,
        label: '28',
    },
    {
        value: 18,
        label: '04',
    },
    {
        value: 19,
        label: '11',
    },
    {
        value: 20,
        label: '15',
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

type Props = {
	slideSet:any
}

function valuetext(value: number) {
    return marks_ant[marks_ant.findIndex((marks_ant) => marks_ant.value === value)].label;
}

const LinhaTempo: React.FC<Props> = (props) =>{
	function handleChange(event:any, newV:any) {
		props.slideSet(newV)
	}

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
				onChange={handleChange}
            />
        </Container>
    )
}
export default LinhaTempo
