import { memo, useCallback, useState } from "react"
import { Container } from "react-bootstrap"

import Menu from "../Menu"

const initialState = Array.from(Array(1000).keys()).map(() => "")

export const Input = memo(({ value, onChange, index }: { value: string, index: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <input value={value} onChange={onChange} data-index={index} />
    )
})

export const TestInputs = () => {
    const [values, setValues] = useState(initialState)

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const index = Number(e.target.dataset.index)
        setValues((prevValues) => [
            ...prevValues.slice(0, index),
            e.target.value,
            ...prevValues.slice(index + 1)])
    }, [])

    return (
        <div>
            <Menu />
            <Container>
                {values.map((value, index) => (
                    <Input
                        key={index}
                        value={value}
                        index={index}
                        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        //     setValues((prevValues) => [
                        //         ...prevValues.slice(0, index),
                        //         e.target.value,
                        //         ...prevValues.slice(index + 1)])
                        // }}
                    onChange={handleChange}
                    />))
                }
            </Container>
        </div>
    )

}
