from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import MessagesState

from langchain_core.messages import HumanMessage, AIMessage

def researcher(state: MessagesState):

    user_msd = state["messages"][-1].content
    info = f"Isearched for 'user_msg' and found detailed information about it"
    return {"messages":[AIMessage(content=info)]}


def summarizer(state: MessagesState):
    ai_msg = state["messages"][-1].content
    summary = f"Summary: {ai_msg[:40]}..."
    return {"messages":[AIMessage(content=summary)]}


def reviewer(state: MessagesState):
    summary_msg = state["messages"][-1].content
    review = f"Review: looks clear and revelant.Appreved.\n Final output: {summary_msg}"
    return {"messages": [AIMessage(content=review)]}




graph = StateGraph(MessagesState)

graph.add_node("researcher", researcher)
graph.add_node("summarizer", summarizer)
graph.add_node("reviewer", reviewer)

graph.add_edge(START, "researcher")
graph.add_edge("researcher", "summarizer")
graph.add_edge("summarizer", "reviewer")
graph.add_edge("reviewer", END)

# Compile to runnable graph
graph = graph.compile()


# result = graph.invoke({
#     "messages": [{"role": "user", "content": "Explain LangGraph state patterns"}]
# })

# print("\n--- FINAL OUTPUT ---")
# for msg in result["messages"]:
#     print(f"{msg['role'].upper()}: {msg['content']}")


# ---- Run the workflow ----
result = graph.invoke({
    "messages": [HumanMessage(content="Explain LangGraph state patterns")]
})

# ---- Print results ----
print("\n--- FINAL OUTPUT ---")
for msg in result["messages"]:
    role = "USER" if isinstance(msg, HumanMessage) else "AI"
    print(f"{role}: {msg.content}")