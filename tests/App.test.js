import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App";

describe("App", () => {
  it('metni tersine çevirir', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText("Metin girin");
    const button = getByText("Tersine Çevir");

    fireEvent.changeText(input, "merhaba");
    fireEvent.press(button);
    expect(getByText("abahrem")).toBeTruthy();
  });

  it('boş metin girildiğinde boş cevap dönsün', () => {
    const { getByText } = render(<App />);
    const button = getByText("Tersine Çevir");
    fireEvent.press(button);
    expect(getByText("")).toBeTruthy();
  });

  it('özel karakterler doğru ters çevrilsin', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText("Metin girin");
    const button = getByText("Tersine Çevir");

    fireEvent.changeText(input, "12345!*&");
    fireEvent.press(button);
    expect(getByText("&*!54321")).toBeTruthy();
  });

  it('100 karakterden uzun metin girildiğinde hata mesajı gösterilsin', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText("Metin girin");
    const button = getByText("Tersine Çevir");

    const longText = "a".repeat(101);
    fireEvent.changeText(input, longText);
    fireEvent.press(button);
    expect(getByTestId("error")).toBeTruthy();
    expect(getByTestId("error").props.children).toBe("Metin 100 karakteri geçemez.");
  });

  it('temizle butonu tüm alanları temizler', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText("Metin girin");
    const reverseButton = getByText("Tersine Çevir");
    const clearButton = getByText("Temizle");

    fireEvent.changeText(input, "test");
    fireEvent.press(reverseButton);
    expect(getByTestId("reversed-text").props.children).toBe("tset");

    fireEvent.press(clearButton);
    expect(input.props.value).toBe("");
    expect(getByTestId("reversed-text").props.children).toBe("");
  });
}); 