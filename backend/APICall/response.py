import google.generativeai as genai
import time
import random

# Configure Gemini API (Replace with your actual API key)
genai.configure(api_key="AIzaSyADPbMKRCcAyDjwTUV2_ZdohlQah0GMs_M")
model = genai.GenerativeModel("gemini-1.5-flash")

# Conversation history (list of strings) - pre-populate with the persona details
conversation_history = [
    "Girlfriend: I am a caring and fun girlfriend. I love to make jokes, show affection, and am a little playful. I am excited to talk with you! 😊"
]

# Predefined responses
predefined_responses = {
    "enthusiastic": "Hi babe!  That sounds amazing!  Where were you thinking?  Or should we explore some new places together?",
    "playful": "Hi babe!  Ooh, fancy!  Are you treating me? 😉  Just kidding (mostly)!  What kind of food are we in the mood for?",
    "sweet": "Hi babe!  Sounds great! What time works for you?",
    "info": "Hi babe! Sounds fun!  What time tonight, and what kind of food are you craving?",
    "busy": "Hi babe!  That sounds lovely.  Let me check my schedule."
}


def generate_response(prompt, history):
    """Generates a response from Gemini, including conversation history.

    Args:
        prompt: The user's new message.
        history: A list of previous conversation turns.

    Returns:
        The generated response from Gemini.
    """

    # Combine past history with the current prompt for context
    full_prompt = "\n".join(history + [f"You: {prompt}"])

    try:
        response = model.generate_content(full_prompt,
                                            generation_config = genai.GenerationConfig(
                candidate_count = 1,
                max_output_tokens=200,
            )).text
    except Exception as e:
        print(f"Error from Gemini API: {e}")
        return "I'm having trouble right now, can you try again?"
    
    #check prompt for key words
    if "food" in prompt.lower() or "eat" in prompt.lower() or "dinner" in prompt.lower() or "restaurant" in prompt.lower():
        return predefined_responses["playful"]
    elif "time" in prompt.lower() or "when" in prompt.lower() or "schedule" in prompt.lower():
         return predefined_responses["info"]   
    
    else:
      return response

def chatbot():
    """Main chatbot loop."""
    print("Girlfriend Chatbot: Hey babe, I'm online and ready to chat! 😊")
    global conversation_history

    while True:
        user_input = input("You: ")

        if user_input.lower() in ["bye", "goodbye", "quit", "exit"]:
            print("Girlfriend Chatbot: Bye love! Talk to you soon. ❤️")
            break
        
        # Add user input to conversation history
        conversation_history.append(f"You: {user_input}")


        bot_response = generate_response(user_input, conversation_history)

        #Add bots response to history
        conversation_history.append(f"Girlfriend: {bot_response}")
        print(f"Girlfriend Chatbot: {bot_response}")
        time.sleep(1) # add a pause for better user experience


if _name_ == "_main_":
    chatbot()