import { useEffect } from "react";
import $ from "jquery";
import "../styles/flip/flip.css";
import { Link } from "react-router-dom";
import titleImage from "../assets/images/flip/title.png";

export default function FlipCardPage() {
  useEffect(() => {
    // localStorage functions
    function set(key, value) {
      localStorage.setItem(key, value);
    }
    function get(key) {
      return localStorage.getItem(key);
    }
    function increase(el) {
      set(el, parseInt(get(el)) + 1);
    }
    function decrease(el) {
      set(el, parseInt(get(el)) - 1);
    }

    var toTime = function (nr) {
      if (nr == "-:-") return nr;
      else {
        var n = " " + nr / 1000 + " ";
        return n.substr(0, n.length - 1) + "s";
      }
    };

    function updateStats() {
      $("#stats").html(
        '<div class="padded"><h2>Figures: <span>' +
          "<b>" +
          get("flip_won") +
          "</b><i>Won</i>" +
          "<b>" +
          get("flip_lost") +
          "</b><i>Lost</i>" +
          "<b>" +
          get("flip_abandoned") +
          "</b><i>Abandoned</i></span></h2>" +
          "<ul><li><b>Best Casual:</b> <span>" +
          toTime(get("flip_casual")) +
          "</span></li>" +
          "<li><b>Best Medium:</b> <span>" +
          toTime(get("flip_medium")) +
          "</span></li>" +
          "<li><b>Best Hard:</b> <span>" +
          toTime(get("flip_hard")) +
          "</span></li></ul>" +
          "<ul><li><b>Total Flips:</b> <span>" +
          parseInt(
            (parseInt(get("flip_matched")) + parseInt(get("flip_wrong"))) * 2,
          ) +
          "</span></li>" +
          "<li><b>Matched Flips:</b> <span>" +
          get("flip_matched") +
          "</span></li>" +
          "<li><b>Wrong Flips:</b> <span>" +
          get("flip_wrong") +
          "</span></li></ul></div>",
      );
    }

    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    function startScreen(text) {
      $(".game-area").removeAttr("class").addClass("game-area").empty();
      $(".game-intro-wrapper").fadeIn(250);

      $(".card-c1").text(text.substring(0, 1));
      $(".card-c2").text(text.substring(1, 2));
      $(".card-c3").text(text.substring(2, 3));
      $(".card-c4").text(text.substring(3, 4));

      // If won game
      if (text == "nice") {
        increase("flip_won");
        decrease("flip_abandoned");
      }

      // If lost game
      else if (text == "fail") {
        increase("flip_lost");
        decrease("flip_abandoned");
      }

      // Update stats
      updateStats();
    }

    /* LOAD GAME ACTIONS */

    // Init localStorage
    if (!get("flip_won") && !get("flip_lost") && !get("flip_abandoned")) {
      //Overall Game stats
      set("flip_won", 0);
      set("flip_lost", 0);
      set("flip_abandoned", 0);
      //Best times
      set("flip_casual", "-:-");
      set("flip_medium", "-:-");
      set("flip_hard", "-:-");
      //Cards stats
      set("flip_matched", 0);
      set("flip_wrong", 0);
    }

    // Fill stats
    if (
      get("flip_won") > 0 ||
      get("flip_lost") > 0 ||
      get("flip_abandoned") > 0
    ) {
      updateStats();
    }

    // Toggle start screen cards
    $('.game-intro-wrapper .game-card:not(".twist")').on("click", function (e) {
      $(this)
        .toggleClass("active")
        .siblings()
        .not(".twist")
        .removeClass("active");
      if ($(e.target).is(".playnow")) {
        $(".game-intro-wrapper .game-card").last().addClass("active");
      }
    });

    // Start game
    $(".play").on("click", function (e) {
      e.preventDefault();
      increase("flip_abandoned");
      $(".game-info").fadeOut();

      var difficulty = "",
        timer = 1000,
        level = $(this).data("level");

      // Set game timer and difficulty
      if (level == 8) {
        difficulty = "casual";
        timer *= level * 4;
      } else if (level == 18) {
        difficulty = "medium";
        timer *= level * 5;
      } else if (level == 32) {
        difficulty = "hard";
        timer *= level * 6;
      }

      // Add difficulty class to container
      $(".flip-game-container")
        .removeClass("casual-mode medium-mode hard-mode")
        .addClass(difficulty + "-mode");
      $(".game-area").addClass(difficulty);

      $(".game-intro-wrapper").fadeOut(250, function () {
        var startGame = Date.now(),
          obj = [];

        // Create and add shuffled cards to game
        for (var i = 0; i < level; i++) {
          obj.push(i);
        }

        var shu = shuffle($.merge(obj, obj)),
          cardSize = 100 / Math.sqrt(shu.length);

        for (var i = 0; i < shu.length; i++) {
          var code = shu[i];
          if (code < 10) code = "0" + code;
          if (code == 30) code = 10;
          if (code == 31) code = 21;
          $(
            '<div class="game-card" style="width:' +
              cardSize +
              "%;height:" +
              cardSize +
              '%;">' +
              '<div class="game-flipper"><div class="game-front"></div><div class="game-back" data-f="&#xf0' +
              code +
              ';"></div></div>' +
              "</div>",
          ).appendTo(".flip-game-container .game-area");
        }

        // Set card actions
        $(".game-area .game-card").on({
          mousedown: function () {
            if ($(".game-area").attr("data-paused") == 1) {
              return;
            }
            var data = $(this)
              .addClass("active")
              .find(".game-back")
              .attr("data-f");

            if ($(".game-area").find(".game-card.active").length > 1) {
              setTimeout(function () {
                var thisCard = $(
                  ".game-area .active .game-back[data-f='" + data + "']",
                );

                if (thisCard.length > 1) {
                  thisCard
                    .parents(".game-card")
                    .toggleClass("active game-card found")
                    .empty();
                  increase("flip_matched");

                  // Win game
                  if (!$(".game-area .game-card").length) {
                    var time = Date.now() - startGame;
                    if (
                      get("flip_" + difficulty) == "-:-" ||
                      get("flip_" + difficulty) > time
                    ) {
                      set("flip_" + difficulty, time);
                    }

                    startScreen("nice");
                  }
                } else {
                  $(".game-area .game-card.active").removeClass("active");
                  increase("flip_wrong");
                }
              }, 401);
            }
          },
        });

        // Add timer bar
        $('<i class="game-timer"></i>')
          .prependTo(".game-area")
          .css({
            animation: "timer " + timer + "ms linear",
          })
          .one(
            "webkitAnimationEnd oanimationend msAnimationEnd animationend",
            function (e) {
              startScreen("fail");
            },
          );

        // Set keyboard (p)ause and [esc] actions
        $(window)
          .off()
          .on("keyup", function (e) {
            // Pause game. (p)
            if (e.keyCode == 80) {
              if ($(".game-area").attr("data-paused") == 1) {
                $(".game-area").attr("data-paused", "0");
                $(".game-timer").css("animation-play-state", "running");
                $(".game-pause").remove();
              } else {
                $(".game-area").attr("data-paused", "1");
                $(".game-timer").css("animation-play-state", "paused");
                $('<div class="game-pause"></div>').appendTo(
                  ".flip-game-container",
                );
              }
            }
            // Abandon game. (ESC)
            if (e.keyCode == 27) {
              startScreen("flip");
              if ($(".game-area").attr("data-paused") == 1) {
                $(".game-area").attr("data-paused", "0");
                $(".game-pause").remove();
              }
              $(window).off();
            }
          });
      });
    });

    // Share button toggle
    $(".share-click").on("click", function () {
      $(this).toggleClass("open");
      $(".share-box-wrapper").slideToggle("fast");
    });

    // Cleanup on unmount
    return () => {
      $(window).off();
      $(".play").off();
      $(".share-click").off();
      $('.game-intro-wrapper .game-card:not(".twist")').off();
    };
  }, []);

  return (
    <div className="flip-game-container">
      <div className="game-full-outer">
        <div id="g" className="game-area"></div>
        <div className="game-intro-wrapper">
          <div className="common-header">
            <div className="common-logo">
              <Link to="/">
                <span className="arrow-icon"> Back to Home </span>
              </Link>
            </div>
          </div>
          <div className="game-header">
            <div className="game-name">
              <h1 data-text="MEMORY GAME">MEMORY GAME</h1>
            </div>
          </div>
          <div className="game-box-outer">
            <div className="game-logo">
              <p className="game-info info-uppercase">
                Click the P to get started
              </p>
              <div className="logo-inner">
                <div className="game-card left">
                  <div className="game-flipper">
                    <div className="game-front card-c1">F</div>
                    <div
                      className="game-back content-box stats-container"
                      id="stats"
                    >
                      <div className="padded">
                        <h2>Figures</h2>
                        Looks like you haven&apos;t FLIPped yet.
                        <a href="javascript:void(0);" className="playnow">
                          Play now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="game-card active twist">
                  <div className="game-flipper">
                    <div className="game-back game-front">
                      <div className="card-c2">L</div>
                    </div>
                  </div>
                </div>
                <div className="game-card left">
                  <div className="game-flipper">
                    <div className="game-front card-c3">I</div>
                    <div className="game-back content-box instructions">
                      <div className="padded">
                        <h2>Instructions</h2>
                        <p>Press [p] to pause, or [ESC] to abandon game.</p>
                        <p>
                          Flip is a timed card memory game. Click the blue cards
                          to see what symbol they uncover and try to find the
                          matching symbol underneath the other cards.
                        </p>
                        <p>
                          Uncover two matching symbols at once to eliminate them
                          from the game.
                        </p>
                        <p>
                          Eliminate all cards as fast as you can to win the
                          game. Have fun FLIPing!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="game-card">
                  <div className="game-flipper">
                    <div className="game-front card-c4">P</div>
                    <div className="game-back content-box levels">
                      <a
                        href="javascript:void(0);"
                        data-level="8"
                        className="play"
                      >
                        Casual
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-level="18"
                        className="play"
                      >
                        Medium
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-level="32"
                        className="play"
                      >
                        Hard
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="game-info">
                Flip should work best in Google Chrome, decent in Firefox, IE10
                and Opera;
              </p>
            </div>
          </div>

          <footer className="footer-wrapper">
            &copy; Copyright {new Date().getFullYear()} Nguyễn Thị Thu Hà . All
            rights reserved.
          </footer>

          <div className="social-media-main">
            <div className="share-box-wrapper">
              <div className="share-box-inner">
                <div
                  title="facebook share"
                  className="social-media-icon facebook-color"
                  id="fb_share"
                ></div>
              </div>
            </div>
            <div className="share-title share-click" title="Share"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
