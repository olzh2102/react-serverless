import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "jest-styled-components";

import Navbar from "./navbar";

describe("Navbar", () => {
  it("renders navbar component", () => {
    // arrange
    const { container } = render(<Navbar />, {
      wrapper: MemoryRouter,
    });

    // act

    // assert
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 20px;
      }

      .c1 {
        font-size: 1.4rem;
      }

      .c1 > a {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c3 {
        list-style: none;
        padding-left: 0;
        display: grid;
        grid-auto-flow: column;
        grid-gap: 20px;
      }

      .c4 {
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.2rem;
        -webkit-transition: color 200ms;
        transition: color 200ms;
      }

      .c4:hover {
        color: #e16365;
      }

      .c2 {
        color: #e16365;
      }

      <div>
        <nav
          class="c0"
        >
          <div
            class="c1"
          >
            <a
              href="/"
            >
              Learn.Build.
              <span
                class="c2"
              >
                Type.
              </span>
            </a>
          </div>
          <div>
            <ul
              class="c3"
            >
              <li>
                <a
                  class="c4"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  class="c4"
                  href="/high-scores"
                >
                  HighScores
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    `);
  });
});
