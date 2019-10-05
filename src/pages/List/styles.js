import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    display: flex;
    background-color: #565bff;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    color: white;
    box-shadow: 0 0 6px 4px rgba(21, 131, 242, 0.3);
`;

export const SearchInput = styled.input`
    background: #222354;
    border: none;
    padding: 10px;
    border-radius: 5px;

    &::-webkit-input-placeholder {
        color: #5a588c;
        font-size: 16px;
        font-weight: 500;
        padding-left: 20px;
    }
`;

export const InputIcon = styled.div`
    width: 100%; 
    position: relative;

    svg{
        position: absolute;
        top: 10px;
        left: 10px;
        color: #5a588c;
        width: 18px;
        height: 18px;
    }
`;