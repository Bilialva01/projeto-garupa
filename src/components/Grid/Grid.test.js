import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Grid from "./Grid";

// Mock the GridItem and Results components
jest.mock("../GridItem/GridItem", () => ({ item }) => <tr><td>{item.name}</td><td>{item.value}</td></tr>);
jest.mock("../Results/Results", () => ({ total }) => <div>Total: {total}</div>);

describe("Grid Component", () => {
  const items = [
    { id: 1, name: "Produto A", value: 100 },
    { id: 2, name: "Produto B", value: 200 },
  ];
  const total = 300;

  beforeEach(() => {
    render(<Grid itens={items} total={total} />);
  });

  test("renders the grid component with correct elements", () => {
    expect(screen.getByText(/Extrato de transações/i)).toBeInTheDocument();
    expect(screen.getByText(/Mercadoria/i)).toBeInTheDocument();
    expect(screen.getByText(/Valor/i)).toBeInTheDocument();
  });

  test("renders the items in reverse order", () => {
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(items.length + 1); // +1 for the header row

    // Check the order of items
    expect(rows[1]).toHaveTextContent("Produto B");
    expect(rows[1]).toHaveTextContent("200");
    expect(rows[2]).toHaveTextContent("Produto A");
    expect(rows[2]).toHaveTextContent("100");
  });

  test("renders the Results component with total", () => {
    expect(screen.getByText(/Total: 300/i)).toBeInTheDocument();
  });
});
