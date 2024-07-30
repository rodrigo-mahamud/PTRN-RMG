import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Range from "./range";

describe("Componente Range", () => {
   const propsPredeterminadas = {
      min: 0,
      max: 100,
      isFixedRange: false,
      selectedColor: "#3b82f6",
      unselectedColor: "#dae3f4",
      onChange: vi.fn(),
   };

   beforeEach(() => {
      vi.clearAllMocks();
   });

   test("se renderiza sin errores", () => {
      render(<Range {...propsPredeterminadas} />);
      expect(screen.getByTestId("dot1")).toBeTruthy();
      expect(screen.getByTestId("dot2")).toBeTruthy();
   });

   test("muestra las etiquetas de mínimo y máximo correctamente", () => {
      render(<Range {...propsPredeterminadas} />);
      expect(screen.getAllByTestId("range-label-min")).toBeTruthy();
      expect(screen.getAllByTestId("range-label-max")).toBeTruthy();
   });

   test("utiliza valores predeterminados cuando no se proporcionan", () => {
      render(<Range isFixedRange={false} />);
      const input1 = screen.getAllByTestId("input1");
      const input2 = screen.getAllByTestId("input2");
      expect(Number(input1[0].getAttribute("value"))).toBe(0);
      expect(Number(input2[0].getAttribute("value"))).toBe(100);
   });
});
